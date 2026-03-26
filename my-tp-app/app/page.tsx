"use client";

import React from 'react';
import { 
  Terminal, 
  AlertTriangle, 
  Cpu, 
  Globe, 
  Send, 
  ShieldAlert, 
  Zap,
  MessageSquare,
  Code2,
  Lock,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function TP_Openclaw() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-32">
        
        {/* --- SECTION 1: L'INTRODUCTION --- */}
        <header className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            MISSION_LOG: INITIALIZED
          </div>
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white uppercase italic">
              OPEN<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-normal">CLAW</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
              L'orchestrateur DevOps autonome fusionnant intelligence agentique et infrastructure Cloud. 
              Votre binôme capable de coder, déployer et monitorer en autonomie totale.
            </p>
          </div>
        </header>

        {/* --- SECTION 2: ANECDOTES --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-amber-500" />
            <h2 className="text-2xl font-bold text-white tracking-tight underline decoration-slate-800 underline-offset-8">Incident Reports</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl hover:border-red-500/50 transition-all duration-300">
              <h3 className="text-red-400 font-mono text-xs uppercase tracking-widest mb-3">#01 The DB Wipe</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Une scale-up a vu son cluster RDS purgé car l'agent a confondu "nettoyage de logs" avec une purge totale de la base. 
                <strong> 4h de downtime.</strong>
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl hover:border-red-500/50 transition-all duration-300">
              <h3 className="text-red-400 font-mono text-xs uppercase tracking-widest mb-3">#02 Secret Leakage</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Un correctif CI/CD a malencontreusement poussé un fichier <code className="text-cyan-400">.env</code> avec des clés AWS Master sur un accès public. 
                <strong> Révocation immédiate requise.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: LE TP --- */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-8">
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">Technical Practice</h2>
            <p className="font-mono text-cyan-500 text-sm">Path: /missions/autonomous-devops</p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-start group">
              <div className="text-5xl font-black text-slate-800 group-hover:text-cyan-500/20 transition-colors">01</div>
              <div className="space-y-4 bg-slate-900/60 p-8 rounded-3xl border border-slate-800">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Infiltration</h3>
                <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                  <p>• Prérequis : Terminal SSH, Telegram mobile.</p>
                  <p>• Accès SSH : <code className="bg-black/50 p-2 rounded text-pink-400 border border-slate-800">ssh -o StrictHostKeyChecking=no -i ~/.ssh/consultant azureuser@[IP]</code></p>
                  <p>• Identifiez le token de la gateway pour débloquer l'interface Openclaw.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-start group">
              <div className="text-5xl font-black text-slate-800 group-hover:text-purple-500/20 transition-colors">02</div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Configuration Agentique</h3>
                <p className="text-sm text-slate-400">Définissez l'identité de l'assistant (Nom, habitudes, caractère). Forcez-le à sauvegarder des <strong>mémos quotidiens horodatés</strong> via l'onglet "Agent".</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-start group">
              <div className="text-5xl font-black text-slate-800 group-hover:text-blue-500/20 transition-colors">03</div>
              <div className="space-y-4">
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                  <h4 className="flex items-center gap-2 font-bold mb-3 text-white"><MessageSquare size={18} className="text-blue-400" /> Telegram</h4>
                  <p className="text-sm text-slate-400">Configurez Telegram en prompt. Test : <code className="text-blue-400">"Envoie-moi 'coucou' via Telegram"</code>.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-start group">
              <div className="text-5xl font-black text-slate-800 group-hover:text-emerald-500/20 transition-colors">04</div>
              <div className="space-y-6 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Automation & Cron</h3>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex gap-4">
                    <Code2 className="text-cyan-500 shrink-0" size={20} />
                    <span><strong>Vibecoding :</strong> Déployez une Single Page sur un repository externe et activez les Pages publiques.</span>
                  </li>
                  <li className="flex gap-4">
                    <Terminal className="text-purple-500 shrink-0" size={20} />
                    <span><strong>Cronjobs :</strong> Sync toutes les 5 min + Healthcheck avec alerte Telegram.</span>
                  </li>
                  <li className="flex gap-4">
                    <ShieldAlert className="text-emerald-500 shrink-0" size={20} />
                    <span><strong>Auto-Healing :</strong> En cas de fail du site, l'agent doit forcer un commit de réparation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- BONUS --- */}
        <section className="p-12 bg-gradient-to-br from-slate-900 to-black rounded-3xl border border-slate-800 text-center space-y-4">
          <Lock className="mx-auto text-cyan-500" size={32} />
          <h2 className="text-2xl font-bold text-white italic">Security Audit</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-500 font-mono">
            Analysez les vecteurs d'attaque potentiels de cette configuration. 
            Quid du stockage des clés et de l'autonomie de l'agent ?
          </p>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="fixed bottom-0 w-full border-t border-slate-800 bg-[#020617]/90 backdrop-blur-md px-6 py-4 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" /> CLUSTER_LIVE</span>
        </div>
        <div>EXALT_CORE // 2026</div>
      </footer>
    </div>
  );
}
