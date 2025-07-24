-- Update profiles table to add missing columns
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS user_id UUID UNIQUE,
ADD COLUMN IF NOT EXISTS display_name TEXT,
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS wallet_address TEXT,
ADD COLUMN IF NOT EXISTS social_links JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS total_donations DECIMAL DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_supporters INTEGER DEFAULT 0;

-- Enable RLS for profiles if not already enabled
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can create their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Create new policies for profiles
CREATE POLICY "Profiles are viewable by everyone" 
ON public.profiles 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (true);

-- Create NFT logos table
CREATE TABLE IF NOT EXISTS public.nft_logos (
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

-- Create policies for NFT logos
CREATE POLICY "NFT logos are viewable by everyone" 
ON public.nft_logos 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create NFT logos" 
ON public.nft_logos 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their NFT logos" 
ON public.nft_logos 
FOR UPDATE 
USING (true);

-- Create donations table
CREATE TABLE IF NOT EXISTS public.donations (
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

-- Create policies for donations
CREATE POLICY "Donations are viewable by everyone" 
ON public.donations 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create donations" 
ON public.donations 
FOR INSERT 
WITH CHECK (true);

-- Create votes table
CREATE TABLE IF NOT EXISTS public.votes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  voter_wallet TEXT NOT NULL,
  nft_logo_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  FOREIGN KEY (nft_logo_id) REFERENCES public.nft_logos(id) ON DELETE CASCADE,
  UNIQUE(voter_wallet, nft_logo_id)
);

-- Enable RLS for votes
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;

-- Create policies for votes
CREATE POLICY "Votes are viewable by everyone" 
ON public.votes 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can vote" 
ON public.votes 
FOR INSERT 
WITH CHECK (true);