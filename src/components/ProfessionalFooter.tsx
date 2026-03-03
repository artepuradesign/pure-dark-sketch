import React from "react";
import { Link } from "react-router-dom";
import { Package, Mail, Shield, FileText, HelpCircle, Send, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ProfessionalFooter = () => {
  const year = new Date().getFullYear();

  const legalLinks = [
    { label: "Termos de Uso", to: "/terms" },
    { label: "Privacidade", to: "/privacy" },
    { label: "LGPD", to: "/lgpd" },
  ];

  const platformLinks = [
    { label: "Planos", to: "/planos-publicos" },
    { label: "API", to: "/api" },
    { label: "Documentação", to: "/docs" },
    { label: "Login", to: "/login" },
  ];

  const supportLinks = [
    { label: "Central de Ajuda", to: "/dashboard/suporte" },
    { label: "Contato", to: "/dashboard/suporte" },
    { label: "Status do Sistema", to: "#" },
  ];

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-card to-background overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Subtle decorative orbs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            
            {/* Brand column - wider */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="inline-flex items-center gap-2 group">
                <Package className="h-7 w-7 text-primary transition-transform group-hover:scale-110 duration-300" />
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-primary">API</span>
                  <span className="text-xl font-bold text-foreground">Painel</span>
                </div>
              </Link>
              
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Plataforma completa para consultas empresariais com APIs integradas. Tecnologia de ponta, segurança máxima e resultados em segundos.
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap gap-3 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">99.9% Uptime</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <Shield className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-primary">SSL & LGPD</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-2 pt-2">
                <a href="#" className="h-9 w-9 rounded-xl bg-muted/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group" aria-label="TikTok">
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="#" className="h-9 w-9 rounded-xl bg-muted/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group" aria-label="Instagram">
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="h-9 w-9 rounded-xl bg-muted/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group" aria-label="Telegram">
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>

            {/* Platform links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Plataforma</h4>
              <nav className="flex flex-col gap-2.5">
                {platformLinks.map(link => (
                  <Link
                    key={link.to + link.label}
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Support links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Suporte</h4>
              <nav className="flex flex-col gap-2.5">
                {supportLinks.map(link => (
                  <Link
                    key={link.to + link.label}
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Legal</h4>
              <nav className="flex flex-col gap-2.5">
                {legalLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Contact info */}
              <div className="mt-6 space-y-2">
                <a href="mailto:contato@apipainel.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  contato@apipainel.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="opacity-50" />
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} APIPainel. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link to="/terms" className="hover:text-primary transition-colors">Termos</Link>
            <span className="text-border">•</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacidade</Link>
            <span className="text-border">•</span>
            <Link to="/lgpd" className="hover:text-primary transition-colors">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;
