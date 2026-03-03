import React from "react";
import { Link } from "react-router-dom";
import { Package, Mail, Send, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ProfessionalFooter = () => {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Produto",
      links: [
        { label: "Planos", to: "/planos-publicos" },
        { label: "API", to: "/api" },
        { label: "Documentação", to: "/docs" },
        { label: "Módulos", to: "/docs" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre", to: "/about" },
        { label: "Contato", to: "/dashboard/suporte" },
        { label: "Status", to: "#", external: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", to: "/terms" },
        { label: "Privacidade", to: "/privacy" },
        { label: "LGPD", to: "/lgpd" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-14 sm:py-20">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-12 lg:gap-8">
            {/* Brand — spans 5 cols on lg */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-5 space-y-5">
              <Link to="/" className="inline-flex items-center gap-2.5 group">
                <Package className="h-7 w-7 text-primary transition-transform group-hover:rotate-[-8deg] duration-300" />
                <span className="text-xl font-bold tracking-tight text-foreground">
                  API<span className="text-primary">Painel</span>
                </span>
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Consultas empresariais seguras, rápidas e confiáveis. 
                Integre nossas APIs em minutos e escale sem limites.
              </p>

              {/* Newsletter-style CTA */}
              <div className="flex items-center gap-2 pt-1">
                <Link
                  to="/registration"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
                >
                  Comece agora gratuitamente
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Contact */}
              <a
                href="mailto:contato@apipainel.com.br"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                contato@apipainel.com.br
              </a>
            </div>

            {/* Link columns — each spans ~2 cols */}
            {columns.map((col) => (
              <div key={col.title} className="col-span-1 lg:col-span-2">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  {col.title}
                </h4>
                <nav className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200 w-fit"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} APIPainel · Todos os direitos reservados
          </p>

          {/* Social */}
          <div className="flex items-center gap-1.5">
            {[
              {
                label: "TikTok",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
              {
                label: "Telegram",
                icon: <Send className="w-4 h-4" />,
              },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="h-8 w-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;
