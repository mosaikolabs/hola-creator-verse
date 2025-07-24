-- Create NFT logos table
CREATE TABLE public.nft_logos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  creator_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  nft_metadata JSONB,
  token_id TEXT,
  contract_address TEXT,
  blockchain TEXT DEFAULT 'avalanche',
  price DECIMAL,
  votes_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  FOREIGN KEY (creator_id) REFERENCES public.profiles(id) ON DELETE CASCADE
);

-- Enable RLS for NFT logos
ALTER TABLE public.nft_logos ENABLE ROW LEVEL SECURITY;

-- NFT logos policies
CREATE POLICY "NFT logos are viewable by everyone" 
ON public.nft_logos 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own NFT logos" 
ON public.nft_logos 
FOR INSERT 
WITH CHECK (auth.uid()::text = (SELECT user_id FROM public.profiles WHERE id = creator_id)::text);

CREATE POLICY "Users can update their own NFT logos" 
ON public.nft_logos 
FOR UPDATE 
USING (auth.uid()::text = (SELECT user_id FROM public.profiles WHERE id = creator_id)::text);

-- Create donations table
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  from_wallet TEXT,
  to_profile_id UUID NOT NULL,
  amount DECIMAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'AVAX',
  transaction_hash TEXT UNIQUE,
  message TEXT,
  is_anonymous BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  FOREIGN KEY (to_profile_id) REFERENCES public.profiles(id) ON DELETE CASCADE
);

-- Enable RLS for donations
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Donations policies
CREATE POLICY "Donations are viewable by everyone" 
ON public.donations 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create donations" 
ON public.donations 
FOR INSERT 
WITH CHECK (true);

-- Create votes table
CREATE TABLE public.votes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  voter_wallet TEXT NOT NULL,
  nft_logo_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  FOREIGN KEY (nft_logo_id) REFERENCES public.nft_logos(id) ON DELETE CASCADE,
  UNIQUE(voter_wallet, nft_logo_id)
);

-- Enable RLS for votes
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;

-- Votes policies
CREATE POLICY "Votes are viewable by everyone" 
ON public.votes 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can vote" 
ON public.votes 
FOR INSERT 
WITH CHECK (true);

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_nft_logos_updated_at
  BEFORE UPDATE ON public.nft_logos
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to update vote counts
CREATE OR REPLACE FUNCTION public.update_votes_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.nft_logos 
    SET votes_count = votes_count + 1 
    WHERE id = NEW.nft_logo_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.nft_logos 
    SET votes_count = votes_count - 1 
    WHERE id = OLD.nft_logo_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update vote counts automatically
CREATE TRIGGER update_nft_votes_count
  AFTER INSERT OR DELETE ON public.votes
  FOR EACH ROW
  EXECUTE FUNCTION public.update_votes_count();