import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Eye, Vote, TrendingUp, Zap } from "lucide-react";

// Mock data - esto se reemplazará con datos reales de Supabase
const featuredNFTs = [
  {
    id: 1,
    title: "Future Gaming Logo",
    creator: "Alex Rivera",
    avatar: "/placeholder.svg",
    image: "/placeholder.svg",
    price: "2.5 AVAX",
    votes: 124,
    views: 1250,
    isHot: true,
  },
  {
    id: 2,
    title: "Neon Cyber Brand",
    creator: "Maria Santos",
    avatar: "/placeholder.svg",
    image: "/placeholder.svg",
    price: "1.8 AVAX",
    votes: 89,
    views: 890,
    isHot: false,
  },
  {
    id: 3,
    title: "Electric Dreams",
    creator: "Carlos Mendez",
    avatar: "/placeholder.svg",
    image: "/placeholder.svg",
    price: "3.2 AVAX",
    votes: 156,
    views: 1680,
    isHot: true,
  },
  {
    id: 4,
    title: "Digital Revolution",
    creator: "Ana Torres",
    avatar: "/placeholder.svg",
    image: "/placeholder.svg",
    price: "1.5 AVAX",
    votes: 67,
    views: 720,
    isHot: false,
  },
];

export const FeaturedNFTs = () => {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="gaming-gradient text-black font-semibold px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending NFTs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">NFTs Destacados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los logos NFT más populares creados por nuestra comunidad de jóvenes talentos
          </p>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredNFTs.map((nft) => (
            <Card key={nft.id} className="nft-card overflow-hidden group">
              {/* NFT Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {nft.isHot && (
                  <Badge className="absolute top-3 left-3 gaming-gradient text-black font-semibold">
                    <Zap className="w-3 h-3 mr-1" />
                    Hot
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* NFT Info */}
              <div className="p-4 space-y-3">
                {/* Title */}
                <h3 className="font-semibold text-lg truncate">{nft.title}</h3>

                {/* Creator */}
                <div className="flex items-center space-x-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={nft.avatar} />
                    <AvatarFallback>{nft.creator[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground truncate">
                    {nft.creator}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Vote className="w-4 h-4" />
                    <span>{nft.votes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{nft.views}</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="text-lg font-bold gradient-text">
                    {nft.price}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="p-2">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="gaming-gradient text-black">
                      Votar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="neon-border gaming-hover px-8">
            Ver Todos los NFTs
          </Button>
        </div>
      </div>
    </section>
  );
};