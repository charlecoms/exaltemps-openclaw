"use client";

import React from 'react';
import { 
  Terminal, 
  AlertTriangle, 
  Cpu, 
  Globe, 
  Github as GithubIcon, // On le renomme ici pour être tranquille
  Send, 
  ShieldAlert, 
  Zap,
  MessageSquare,
  Code2,
  Lock,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const Github = GithubIcon || GithubIcon;

const TP_Openclaw = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans">
      {/* Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 space-y-32">
        
        {/* SECTION 1: INTRODUCTION */}
        <section className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm mb-4">
            <Zap size={14} className="mr-2" /> Version 2026.4 - NextGen Agent
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            Openclaw.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            L'orchestrateur DevOps autonome qui fusionne l'intelligence agentique avec vos infrastructures cloud. 
            Plus qu'un CLI, c'est votre binôme invisible capable de coder, déployer et monitorer en autonomie totale.
          </p>
        </section>

        {/* SECTION 2: LES ANECDOTES (FAILURES) */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <AlertTriangle className="text-amber-500" /> Quand l'IA s'emballe
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              <h3 className="text-red-400 font-semibold mb-2">Le Flush Fantôme</h3>
              <p className="text-sm text-slate-400">
                Dans une Fintech londonienne, un agent Openclaw mal configuré a interprété une commande de "nettoyage de logs" comme une instruction de purge complète d'un cluster RDS en production. 
                <strong> Résultat :</strong> 4h de downtime et une restauration de snapshot en urgence.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              <h3 className="text-red-400 font-semibold mb-2">Le Leak des Secrets</h3>
              <p className="text-sm text-slate-400">
                Un consultant a demandé à Openclaw de "fixer les problèmes de CI/CD". L'agent, pour tester les accès, a commit par erreur un fichier <code className="text-cyan-300">.env</code> contenant les clés AWS Master sur un repo public. Les clés ont été révoquées en 120 secondes, mais le stress est resté.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: LE TP (THE MISSION) */}
        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Mission : Autonomous Engineer</h2>
            <p className="text-slate-400 text-lg">Suivez les instructions pour configurer votre agent de terrain.</p>
          </div>

          <div className="space-y-8 border-l border-slate-800 ml-4 pl-8 relative">
            
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              <h3 className="text-xl font-semibold mb-4">01. Infiltration & Accès</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" /> Prérequis : Git Bash (ou SSH), GitHub, et Telegram sur votre mobile.</li>
                <li className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" /> Tentez l'URL : <span className="text-cyan-300">openclaw-exalt-team-[id]-...azure.com</span>. Rien ? C'est normal.</li>
                <li className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" /> SSH sur la VM : <code className="bg-slate-800 px-2 py-1 rounded text-xs text-pink-400">ssh -o StrictHostKeyChecking=no -i ~/.ssh/consultant azureuser@[IP]</code></li>
                <li className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" /> Trouvez le token de la gateway et connectez-vous.</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-700" />
              <h3 className="text-xl font-semibold mb-4">02. Profiling de l'Agent</h3>
              <p className="text-slate-400 text-sm mb-4">
                Configurez l'agent DevOps parfait. Donnez-lui un nom, un caractère, et surtout des consignes strictes : 
                <strong> Horodatage systématique des mémos quotidiens.</strong>
              </p>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs font-mono text-cyan-500">
                Indice : Utilisez l'onglet "Agent" pour affiner son comportement au-delà du simple prompt.
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-700" />
              <h3 className="text-xl font-semibold mb-4">03. Interconnexion (Telegram & GitHub)</h3>
              <div className="space-y-4 text-slate-400 text-sm">
                <p>• Configurez <strong>Telegram</strong> en prompt : "Envoie-moi 'coucou' via Telegram".</p>
                <p>• Connectez votre compte <strong>GitHub</strong> via le Device Login. Restreignez les droits au strict minimum (Principe de moindre privilège).</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-700" />
              <h3 className="text-xl font-semibold mb-4">04. Vibecoding & Automation</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" /> Générez une Single Page via Openclaw et publiez-la sur un nouveau repo avec GitHub Pages activé.</li>
                <li className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" /> <strong>Cronjob 1 :</strong> Synchronisation de l'arborescence vers un repo privé toutes les 5 min.</li>
                <li className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" /> <strong>Cronjob 2 :</strong> Healthcheck de la page publique avec alerte Telegram.</li>
                <li className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" /> <strong>Final :</strong> Auto-réparation. Si le site tombe, l'agent doit forcer un nouveau commit pour relancer le build.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* BONUS SECTION */}
        <section className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
          <div className="flex items-center gap-4 mb-4">
            <ShieldAlert className="text-cyan-400" />
            <h2 className="text-xl font-bold">Audit de Sécurité (Bonus)</h2>
          </div>
          <p className="text-slate-400 text-sm">
            Il reste des failles dans cette architecture. Analysez l'exercice et proposez des améliorations pour sécuriser davantage l'agent Openclaw.
          </p>
        </section>

      </main>

      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 w-full border-t border-slate-900 bg-slate-950/80 backdrop-blur-md px-6 py-3 flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> System Online</span>
          <span>Gateway: Secure</span>
        </div>
        <div>Exalt Team // Openclaw Training 2026</div>
      </footer>
    </div>
  );
};

export default TP_Openclaw;
