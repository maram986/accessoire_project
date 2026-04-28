"use client";
import { useState } from 'react';
import { UserPlus, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données d'inscription :", formData);
    // Ici tu ajouteras ton appel API plus tard
    alert("Compte créé (Simulation)");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
        
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-600 rounded-2xl text-white mb-4">
            <UserPlus size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">Créer un compte</h1>
          <p className="text-slate-500 mt-2">Rejoignez la gestion de stock</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-600 ml-1">Nom d'utilisateur</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Votre nom"
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-600 ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="nom@exemple.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-600 ml-1">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="••••••••"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
          >
            S'inscrire
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-center mt-8 text-slate-600">
          Déjà un compte ?{' '}
          <Link href="/" className="text-blue-600 font-bold hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}