import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Crown, Star, TrendingUp, Users, Wallet } from "lucide-react";

// Mock data - esto se reemplazará con datos reales de Supabase
const topCreators = [
  {
    id: 1,
    name: "Alex Rivera",
    username: "@alexcrypto",
    avatar: "/placeholder.svg",
    totalEarned: "12.5 AVAX",
    nftCount: 23,
    followers: 1240,
    rank: 1,
    isVerified: true,
  },
  {
    id: 2,
    name: "Maria Santos",
    username: "@mariartist",
    avatar: "/placeholder.svg",
    totalEarned: "8.9 AVAX",
    nftCount: 18,
    followers: 890,
    rank: 2,
    isVerified: true,
  },
  {
    id: 3,
    name: "Carlos Mendez",
    username: "@carlosdesign",
    avatar: "/placeholder.svg",
    totalEarned: "7.2 AVAX",
    nftCount: 15,
    followers: 650,
    rank: 3,
    isVerified: false,
  },
  {
    id: 4,
    name: "Ana Torres",
    username: "@anagfx",
    avatar: "/placeholder.svg",
    totalEarned: "6.1 AVAX",
    nftCount: 12,
    followers: 520,
    rank: 4,
    isVerified: true,
  },
  {
    id: 5,
    name: "Luis Garcia",
    username: "@luisnft",
    avatar: "/placeholder.svg",
    totalEarned: "5.8 AVAX",
    nftCount: 14,
    followers: 480,
    rank: 5,
    isVerified: false,
  },
];

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
  if (rank === 2) return <Crown className="w-5 h-5 text-gray-400" />;
  if (rank === 3) return <Crown className="w-5 h-5 text-amber-600" />;
  return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
};

export const TopCreators = () => {
  return (
    <section className="px-4 py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="gaming-gradient text-black font-semibold px-4 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            Top Creators
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Creadores Destacados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a los jóvenes talentos que están liderando la revolución NFT en Hack The Future
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {topCreators.map((creator) => (
            <Card key={creator.id} className="nft-card p-6 text-center group">
              {/* Rank */}
              <div className="flex justify-center mb-4">
                {getRankIcon(creator.rank)}
              </div>

              {/* Avatar */}
              <div className="relative mb-4">
                <Avatar className="w-20 h-20 mx-auto ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                  <AvatarImage src={creator.avatar} />
                  <AvatarFallback className="text-lg">{creator.name[0]}</AvatarFallback>
                </Avatar>
                {creator.isVerified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-black" />
                  </div>
                )}
              </div>

              {/* Creator Info */}
              <div className="space-y-2 mb-4">
                <h3 className="font-semibold text-lg">{creator.name}</h3>
                <p className="text-sm text-muted-foreground">{creator.username}</p>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-1">
                  <Wallet className="w-4 h-4 text-neon-cyan" />
                  <span className="font-bold gradient-text">{creator.totalEarned}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">{creator.nftCount}</div>
                    <div className="text-muted-foreground">NFTs</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{creator.followers}</div>
                    <div className="text-muted-foreground">Seguidores</div>
                  </div>
                </div>
              </div>

              {/* Follow Button */}
              <Button className="w-full gaming-hover" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Seguir
              </Button>
            </Card>
          ))}
        </div>

        {/* Leaderboard Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="neon-border gaming-hover px-8">
            <TrendingUp className="w-5 h-5 mr-2" />
            Ver Leaderboard Completo
          </Button>
        </div>
      </div>
    </section>
  );
};