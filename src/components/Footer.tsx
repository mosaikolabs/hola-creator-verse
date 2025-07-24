import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Twitter, Github, MessageCircle, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-4 py-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gaming-gradient flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-xl font-bold gradient-text">Hack The Future</h3>
            </div>
            <p className="text-muted-foreground">
              Empoderando jóvenes creativos a través de la tecnología Web3 y NFTs. 
              Creando el futuro, un logo a la vez.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Explorar NFTs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Crear NFT</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Top Creators</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Leaderboard</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Stats</a></li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Eventos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ayuda</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Guías</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Soporte</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <Card className="neon-border p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Hack The Future. Hecho con{" "}
                <Heart className="inline w-4 h-4 text-red-500" />{" "}
                para la próxima generación de creativos.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Términos
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
};