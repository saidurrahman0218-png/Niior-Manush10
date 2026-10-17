import React, { useState } from 'react';
import { ShoppingBag, Truck, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    pickupLocation: '',
    receiverName: '',
    receiverPhone: '',
    deliveryLocation: '',
    parcelType: 'সাধারণ পার্সেল',
    instructions: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="bg-emerald-600 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Truck className="h-7 w-7 text-emerald-200" />
            <h1 className="text-2xl font-bold tracking-wide">নিজর মানুষ</h1>
          </div>
          <a href="tel:01700000000" className="flex items-center space-x-1 bg-emerald-700 hover:bg-emerald-800 px-3 py-1.5 rounded-full text-sm font-medium transition">
            <Phone className="h-4 w-4" />
            <span>কল করুন</span>
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-emerald-700 text-white py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-3">বিশ্বনাথের নিজস্ব বিশ্বস্ত হোম ডেলিভারি ও পার্সেল সার্ভিস</h2>
          <p className="text-emerald-100 text-base mb-6">আপনার যেকোনো প্রয়োজনীয় পণ্য বা পার্সেল দ্রুত ও নিরাপদে পৌঁছে দিতে আপনার পাশেই আছে ‘নিজর মানুষ’।</p>
          <div className="flex justify-center space-x-4 text-sm font-medium">
            <div className="flex items-center space-x-1 bg-emerald-800/60 px-3 py-1.5 rounded-lg">
              <Clock className="h-4 w-4 text-emerald-300" />
              <span>দ্রুত ডেলিভারি</span>
            </div>
            <div className="flex items-center space-x-1 bg-emerald-800/60 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              <span>নিরাপদ গ্রহণ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Order Form Section */}
      <main className="max-w-2xl mx-auto px-4 -mt-6 mb-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center border-b pb-3">
            <Send className="h-5 w-5 text-emerald-600 mr-2" />
            পার্সেল ডেলিভারি অর্ডার বুক করুন
          </h3>

          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-slate-800 mb-2">আপনার অর্ডার সফলভাবে গৃহীত হয়েছে!</h4>
              <p className="text-slate-600 mb-6">আমাদের রাইডার খুব শীঘ্রই আপনার সাথে যোগাযোগ করবেন।</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-emerald-700 transition"
              >
                নতুন অর্ডার করুন
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Sender Details */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-emerald-700 mb-3 text-sm uppercase tracking-wider">প্রেরকের তথ্য (Pickup)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">আপনার নাম *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="যেমন: রহিম আহমেদ"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm outline-none"
                      value={formData.senderName}
                      onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">মোবাইল নম্বর *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="017xxxxxxxx"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm outline-none"
                      value={formData.senderPhone}
                      onChange={(e) => setFormData({...formData, senderPhone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-medium text-slate-600 mb-1">পিকআপ ঠিকানা *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="গ্রাম/রোড, এলাকা, বিশ্বনাথ"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm outline-none"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                  />
                </div>
              </div>

              {/* Receiver Details */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-emerald-700 mb-3 text-sm uppercase tracking-wider">প্রাপকের তথ্য (Delivery)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">প্রাপকের নাম *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="যেমন: করিম মিয়া"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm outline-none"
                      value={formData.receiverName}
                      onChange={(e) => setFormData({...formData, receiverName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">প্রাপকের মোবাইল *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="017xxxxxxxx"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm outline-none"
                      value={formData.receiverPhone}
                      onChange={(e) => setFormData({...formData, receiverPhone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-medium text-slate-600 mb-1">ডেলিভারি ঠিকানা *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="গ্রাম/রোড, গন্তব্য এলাকা"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm outline-none"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({...formData, deliveryLocation: e.target.value})}
                  />
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">পার্সেলের ধরন</label>
                <select 
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm outline-none bg-white"
                  value={formData.parcelType}
                  onChange={(e) => setFormData({...formData, parcelType: e.target.value})}
                >
                  <option value="সাধারণ পার্সেল">সাধারণ পার্সেল / ডকুমেন্ট</option>
                  <option value="খাবার ও অর্গানিক আইটেম">খাবার / অর্গানিক আইটেম</option>
                  <option value="কাপড় ও পোশাক">কাপড় ও পোশাক (থ্রি-পিস/শাড়ি)</option>
                  <option value="ইলেকট্রনিক্স">ইলেকট্রনিক্স প্রোডাক্ট</option>
                  <option value="অন্যান্য">অন্যান্য</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">বিশেষ নির্দেশাবলী (যদি থাকে)</label>
                <textarea 
                  rows={2}
                  placeholder="যেমন: কাঁচের পণ্য, সাবধানে ডেলিভারি করবেন..."
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm outline-none"
                  value={formData.instructions}
                  onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center space-x-2"
              >
                <span>অর্ডার কনফার্ম করুন</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-6 text-center text-sm border-t border-slate-700">
        <p>© ২০২৬ নিজর মানুষ (Nijor Manush) — বিশ্বনাথ, সিলেট। সর্বস্বত্ব সংরক্ষিত।</p>
      </footer>
    </div>
  );
}
