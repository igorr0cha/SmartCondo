import './index.css'; 
import React, { useState } from 'react';

import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Calendar, 
  FileText, 
  Bell, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle2, 
  Menu, 
  X, 
  Search, 
  Plus, 
  Download, 
  Info, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  EyeOff, 
  Trash2, 
  Lock 
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [showConsentModal, setShowConsentModal] = useState(true);
  const [userSettings, setUserSettings] = useState({
    showPhoneToNeighbors: false,
    showEmailToNeighbors: false,
    marketingEmails: false
  });

  // --- MOCK DATA ---
  const stats = [
    { title: 'Saldo Total', value: 'R$ 45.230,00', icon: <DollarSign className="text-green-600" size={20} />, change: '+2.5%' },
    { title: 'Inadimplência', value: '8.2%', icon: <AlertTriangle className="text-red-500" size={20} />, change: '-1.0%' },
    { title: 'Reservas Hoje', value: '4', icon: <Calendar className="text-blue-500" size={20} />, change: 'Espaços ocupados' },
    { title: 'Chamados Abertos', value: '12', icon: <FileText className="text-orange-500" size={20} />, change: '5 urgentes' },
  ];

  const moradores = [
    { id: 1, nome: 'Ana Silva', apto: '101', status: 'Adimplente', contato: '(11) 98888-0001' },
    { id: 2, nome: 'João Pereira', apto: '102', status: 'Inadimplente', contato: '(11) 98888-0002' },
    { id: 3, nome: 'Carla Souza', apto: '201', status: 'Adimplente', contato: '(11) 98888-0003' },
  ];

  const reservas = [
    { id: 1, espaco: 'Salão de Festas', data: '15 Out 2023', morador: 'Apto 101', status: 'Confirmado' },
    { id: 2, espaco: 'Churrasqueira A', data: '16 Out 2023', morador: 'Apto 304', status: 'Pendente' },
    { id: 3, espaco: 'Academia', data: '15 Out 2023', morador: 'Apto 215', status: 'Confirmado' },
  ];

  const logsPrivacidade = [
    { id: 1, acao: 'Acesso aos dados financeiros', usuario: 'Admin - Administradora X', data: '17/03/2026 14:30' },
    { id: 2, acao: 'Exportação de lista de moradores', usuario: 'Síndico Ricardo', data: '17/03/2026 10:15' },
    { id: 3, acao: 'Alteração de permissão de reserva', usuario: 'Sistema Automático', data: '16/03/2026 22:00' },
  ];

  // --- COMPONENTS ---
  const SidebarItem = ({ id, icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
        activeTab === id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-600'
      }`}
    >
      {icon}
      <span className={`font-medium ${!isSidebarOpen && 'hidden'}`}>{label}</span>
    </button>
  );

  const Header = ({ title, subtitle }) => (
    <div className="mb-8 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        <p className="text-slate-500">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">R</div>
      </div>
    </div>
  );

  // --- VIEWS ---
  const renderDashboard = () => (
    <>
      <Header title="Olá, Síndico Ricardo" subtitle="Painel de Gestão e Privacidade Ativa" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.title}</p>
            <h3 className="text-xl font-bold text-slate-800">{stat.value}</h3>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <ShieldCheck className="text-blue-600" size={32} />
          <div>
            <h4 className="font-bold text-blue-900">Privacidade Ativa</h4>
            <p className="text-sm text-blue-700">Este protótipo está configurado para conformidade total com a LGPD.</p>
          </div>
        </div>
        <button onClick={() => setActiveTab('privacidade')} className="hidden md:block text-blue-600 font-bold text-sm bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
          Definições de Privacidade
        </button>
      </div>
    </>
  );

  const renderMoradores = () => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <Header title="Gestão de Moradores" subtitle="Visualização restrita ao Síndico" />
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[500px]">
          <thead>
            <tr className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
              <th className="px-4 py-4">Nome</th>
              <th className="px-4 py-4">Apto</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4 text-center">Privacidade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {moradores.map(m => (
              <tr key={m.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-4 font-bold text-slate-700 text-sm">{m.nome}</td>
                <td className="px-4 py-4 text-sm text-slate-500">{m.apto}</td>
                <td className="px-4 py-4">
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${m.status === 'Adimplente' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {m.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-center"><EyeOff size={16} className="text-slate-300 inline" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderReservas = () => (
    <>
      <Header title="Agenda de Espaços" subtitle="Gestão de áreas comuns" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reservas.map(r => (
          <div key={r.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${r.status === 'Confirmado' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                {r.status}
              </span>
              <Clock size={16} className="text-slate-300" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{r.espaco}</h3>
            <div className="flex items-center text-xs text-slate-500 space-x-2 mb-4">
              <Calendar size={12} /> <span>{r.data}</span>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-slate-50 rounded-lg">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600">U</div>
              <span className="text-xs font-medium text-slate-600">{r.morador}</span>
            </div>
          </div>
        ))}
        <div className="border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-slate-400 cursor-pointer hover:bg-blue-50 hover:border-blue-400 hover:text-blue-500 transition-all min-h-[160px]">
          <Plus size={32} />
          <span className="font-bold mt-2">Nova Reserva</span>
        </div>
      </div>
    </>
  );

  const renderPrivacidade = () => (
    <>
      <Header title="Privacidade e Dados" subtitle="Gestão de direitos LGPD" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Lock size={18} className="text-blue-600" /> Visibilidade
          </h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-bold text-slate-700">Mostrar telefone para vizinhos</p>
                <p className="text-xs text-slate-400">Privacidade de contato.</p>
              </div>
              <div 
                className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${userSettings.showPhoneToNeighbors ? 'bg-blue-600' : 'bg-slate-200'}`}
                onClick={() => setUserSettings({...userSettings, showPhoneToNeighbors: !userSettings.showPhoneToNeighbors})}
              >
                <div className={`bg-white w-4 h-4 rounded-full transition-transform ${userSettings.showPhoneToNeighbors ? 'translate-x-6' : 'translate-x-0'}`} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-bold text-slate-700">Aparecer na lista de moradores</p>
                <p className="text-xs text-slate-400">Anonimização parcial.</p>
              </div>
              <div 
                className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${userSettings.showEmailToNeighbors ? 'bg-blue-600' : 'bg-slate-200'}`}
                onClick={() => setUserSettings({...userSettings, showEmailToNeighbors: !userSettings.showEmailToNeighbors})}
              >
                <div className={`bg-white w-4 h-4 rounded-full transition-transform ${userSettings.showEmailToNeighbors ? 'translate-x-6' : 'translate-x-0'}`} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Download size={18} className="text-blue-600" /> Meus Dados (Art. 18)
          </h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors text-left">
              <span className="text-sm font-medium text-slate-700">Exportar Relatório de Dados</span>
              <Download size={18} className="text-slate-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 border border-red-50 rounded-xl hover:bg-red-50 transition-colors group text-left">
              <span className="text-sm font-medium text-red-600">Eliminar Conta e Dados</span>
              <Trash2 size={18} className="text-red-300 group-hover:text-red-600" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Clock size={18} className="text-blue-600" /> Auditoria de Acessos
          </h3>
          <div className="space-y-3">
            {logsPrivacidade.map(log => (
              <div key={log.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-slate-50 rounded-lg text-xs gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="font-bold text-slate-700">{log.acao}</span>
                </div>
                <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
                  <p className="text-slate-600 font-medium">{log.usuario}</p>
                  <p className="text-slate-400">{log.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">
      {/* Consent Modal */}
      {showConsentModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
              <ShieldCheck className="text-blue-600" size={32} />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-4 text-center md:text-left">Privacidade SmartCondo</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm text-center md:text-left">
              Para continuar, aceite como tratamos seus dados pessoais em conformidade com a LGPD.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer hover:bg-blue-50 transition-colors">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="text-xs font-bold text-slate-700 underline">Termos de Uso</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer hover:bg-blue-50 transition-colors">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="text-xs font-bold text-slate-700 underline">Política de Privacidade</span>
              </div>
            </div>
            <button 
              onClick={() => setShowConsentModal(false)}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform active:scale-95"
            >
              Aceitar e Continuar
            </button>
          </div>
        </div>
      )}

      {/* Sidebar - Mobile Responsive */}
      <aside className={`${isSidebarOpen ? 'w-full md:w-64' : 'w-full md:w-20'} bg-white border-b md:border-r border-slate-200 p-4 transition-all duration-300 flex flex-col sticky top-0 md:h-screen z-40`}>
        <div className="flex items-center justify-between md:justify-start md:space-x-3 mb-6 md:mb-10 px-2">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Building2 size={24} />
            </div>
            <span className={`font-black text-xl tracking-tight text-blue-900 ${!isSidebarOpen && 'md:hidden'}`}>SMARTCONDO</span>
          </div>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className={`space-y-2 ${!isSidebarOpen && 'hidden md:block'}`}>
          <SidebarItem id="dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <SidebarItem id="moradores" icon={<Users size={20} />} label="Moradores" />
          <SidebarItem id="reservas" icon={<Calendar size={20} />} label="Reservas" />
          <SidebarItem id="privacidade" icon={<ShieldCheck size={20} />} label="Privacidade" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'moradores' && renderMoradores()}
          {activeTab === 'reservas' && renderReservas()}
          {activeTab === 'privacidade' && renderPrivacidade()}
        </div>
      </main>
    </div>
  );
};

export default App;