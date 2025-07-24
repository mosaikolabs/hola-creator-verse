import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, Search, User, Plus, Trophy, Zap } from "lucide-react";

export const Navigation = () => {
  return (
    <Card className="neon-border sticky top-4 z-50 mx-4 my-4">
      <nav className="flex items-center justify-between p-4 bg-card/80 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg gaming-gradient flex items-center justify-center">
            <Zap className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl font-bold gradient-text">Hack The Future</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center max-w-md mx-8 flex-1">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Buscar creators o NFTs..."
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="gaming-hover">
            <Trophy className="w-4 h-4 mr-2" />
            Explorar
          </Button>
          <Button variant="ghost" className="gaming-hover">
            <Plus className="w-4 h-4 mr-2" />
            Crear
          </Button>
          <Button variant="outline" className="gaming-hover neon-border">
            <Wallet className="w-4 h-4 mr-2" />
            Conectar Wallet
          </Button>
          <Button variant="default" className="gaming-gradient gaming-hover">
            <User className="w-4 h-4 mr-2" />
            Mi Perfil
          </Button>
        </div>
      </nav>
    </Card>
  );
};