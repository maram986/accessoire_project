"use client";
import { useEffect, useState } from 'react';

// Local Accessoire type and a lightweight stub for accessoireService to avoid missing module errors.
// Replace or remove the stub when you add the real ../services/api implementation.
type Accessoire = {
  id: number;
  nom: string;
  marque: string;
  categorie: string;
  prix: number;
};

const accessoireService = {
  async getAll(): Promise<Accessoire[]> {
    return [];
  }
};

import { Plus, Trash2, Search, X, Package, Tag, CreditCard } from 'lucide-react';

export default function Home() {
  const [accessoires, setAccessoires] = useState<Accessoire[]>([
    { id: 1, nom: "Cage Itel", marque: "Itel", categorie: "Protection", prix: 20 },
    { id: 2, nom: "Écran Protection", marque: "Samsung", categorie: "Accessoire", prix: 35 },
  ]);
  const [recherche, setRecherche] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ nom: '', marque: '', categorie: 'Accessoire', prix: 0 });

  const itemsFiltrés = accessoires.filter(item => 
    item.nom.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="p-4 md:p-10 bg-slate-50 min-h-screen text-slate-800 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header avec un look moderne */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Package size={28} />
              </div>
              Gestion de Stock
            </h1>
            <p className="text-slate-500 mt-1 ml-12">Gérez vos accessoires en temps réel</p>
          </div>
          
          <button 
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200 font-semibold"
          >
            <Plus size={20} /> Ajouter un produit
          </button>
        </div>

        {/* Barre de recherche stylisée */}
        <div className="relative mb-8 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher par nom ou marque..." 
            className="w-full pl-12 pr-4 py-4 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all text-lg"
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>

        {/* Tableau avec cartes (Cards) pour un look "App" */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-5 text-slate-500 font-semibold uppercase text-xs tracking-wider">Produit</th>
                <th className="p-5 text-slate-500 font-semibold uppercase text-xs tracking-wider">Marque</th>
                <th className="p-5 text-slate-500 font-semibold uppercase text-xs tracking-wider">Prix</th>
                <th className="p-5 text-slate-500 font-semibold uppercase text-xs tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {itemsFiltrés.length > 0 ? itemsFiltrés.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                        <Tag size={18} />
                      </div>
                      <span className="font-bold text-slate-700">{item.nom}</span>
                    </div>
                  </td>
                  <td className="p-5 text-slate-600">{item.marque}</td>
                  <td className="p-5">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-sm">
                      {item.prix} DT
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="p-20 text-center text-slate-400 italic">
                    Aucun accessoire trouvé...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal stylisée */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800">Nouveau Produit</h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={20}/></button>
            </div>
            
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Nom de l'accessoire</label>
                <input type="text" placeholder="ex: Cage antichoc" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Marque</label>
                <input type="text" placeholder="ex: Apple, Samsung..." className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 ml-1 text-blue-500">Prix (DT)</label>
                <input type="number" placeholder="0.00" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold" />
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all mt-4">
                Enregistrer le produit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}