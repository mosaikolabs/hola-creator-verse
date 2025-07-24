import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Rocket, Star, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative px-4 py-16 text-center">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-purple/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Badge */}
        <Badge className="gaming-gradient text-black font-semibold px-4 py-2 text-sm">
          <Zap className="w-4 h-4 mr-2" />
          Web3 Gaming Platform
        </Badge>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crea, Comparte y
            <span className="gradient-text block">Gana con NFTs</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            La plataforma Web3 donde jóvenes creativos transforman sus logos en NFTs 
            y reciben donaciones de la comunidad
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gaming-gradient gaming-hover px-8 py-3 text-lg font-semibold">
            <Rocket className="w-5 h-5 mr-2" />
            Comenzar Ahora
          </Button>
          <Button size="lg" variant="outline" className="neon-border gaming-hover px-8 py-3 text-lg">
            <Star className="w-5 h-5 mr-2" />
            Explorar NFTs
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="nft-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text">1,247</div>
            <div className="text-muted-foreground">Creators Activos</div>
          </Card>
          <Card className="nft-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text">856</div>
            <div className="text-muted-foreground">NFTs Creados</div>
          </Card>
          <Card className="nft-card p-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="text-3xl font-bold gradient-text">₳ 45.2K</div>
              <TrendingUp className="w-6 h-6 text-gaming-green" />
            </div>
            <div className="text-muted-foreground">Total Donaciones</div>
          </Card>
        </div>
      </div>
    </div>
  );
};