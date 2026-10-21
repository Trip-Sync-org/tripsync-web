import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  FileText, 
  Lock, 
  Scale, 
  AlertTriangle, 
  Clock, 
  CreditCard, 
  ArrowLeft, 
  Mail, 
  Copy, 
  Check, 
  Search, 
  UserX, 
  ChevronRight, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  Layers,
  HelpCircle,
  Users
} from "lucide-react";
import Footer from "../components/Footer";

export default function Terms() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'terms', 'privacy'
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedSection, setCopiedSection] = useState(null);

  // Set initial tab or scroll target based on hash or search
  useEffect(() => {
    if (location.hash === "#privacy" || location.pathname === "/privacy") {
      setActiveTab("privacy");
    } else if (location.hash === "#terms") {
      setActiveTab("terms");
    }
  }, [location]);

  const copyLink = (id) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pointer-events-auto w-full min-h-screen bg-[#070707] text-white pt-32 md:pt-40 pb-12 selection:bg-white selection:text-black font-ui">
      {/* Background radial ambient lights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[160px] rounded-full" />
        <div className="absolute top-[600px] right-10 w-[500px] h-[500px] bg-white/[0.015] blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-white/[0.015] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-white/50 mb-8 uppercase tracking-widest font-ui">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5 group">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-white">Legal & Compliance</span>
        </div>

        {/* Hero Header */}
        <div className="relative border border-white/10 rounded-3xl p-6 md:p-12 bg-white/[0.02] backdrop-blur-2xl overflow-hidden mb-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8 mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-wider text-white/80 mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                Legal Framework & Intermediary Policy
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-4 leading-tight">
                TripSync Platform Agreement & Privacy Policy
              </h1>
              <p className="text-white/60 text-sm md:text-base leading-relaxed font-body text-lg">
                This comprehensive agreement establishes the binding contractual terms, platform intermediary status, financial escrow protections, roadway safety parameters, and DPDP-compliant data governance across all TripSync systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="mailto:Support@tripsync.live?subject=Account%20Deletion%20Request&body=Hello%20TripSync%20Team%2C%0A%0AI%20would%20like%20to%20request%20the%20permanent%20deletion%20of%20my%20TripSync%20account.%0A%0ARegistered%20Phone%20or%20Email%3A%20%0AUser%20Name%3A%20%0A%0AThank%20you."
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/10 border border-red-500/20 text-red-300 hover:bg-red-500/20 transition-all"
              >
                <UserX className="w-4 h-4" />
                Delete Account Request
              </a>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-all"
              >
                <FileText className="w-4 h-4" />
                Print / Save PDF
              </button>
            </div>
          </div>

          {/* Metadata Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/70">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-widest text-[10px]">Effective Date</p>
                <p className="font-semibold text-white">June 24, 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/70">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-widest text-[10px]">Last Updated</p>
                <p className="font-semibold text-white">June 24, 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/70">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-widest text-[10px]">Corporate Entity</p>
                <p className="font-semibold text-white truncate">TripSync Internet Pvt Ltd</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/70">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-widest text-[10px]">Jurisdiction</p>
                <p className="font-semibold text-white">Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Deletion Callout Card (Explicit User Instruction) */}
        <div className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-950/20 via-black to-red-950/20 p-6 md:p-8 mb-12 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                <UserX className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-red-400">Direct Compliance Clause</span>
                <h3 className="text-lg md:text-xl font-bold font-display text-white mt-1">
                  Looking to delete your TripSync account?
                </h3>
                <p className="text-white/70 text-sm mt-1 max-w-2xl leading-relaxed">
                  If you want to delete your account, mail us at{" "}
                  <a href="mailto:Support@tripsync.live" className="text-white underline font-bold hover:text-red-400 transition-colors">
                    Support@tripsync.live
                  </a>{" "}
                  or trigger an account deletion request through your application settings panel. In accordance with Section 5.2, your request undergoes a standard 21-day verification buffer before permanent and irreversible anonymization.
                </p>
              </div>
            </div>
            <a
              href="mailto:Support@tripsync.live?subject=Account%20Deletion%20Request&body=Hello%20TripSync%20Team%2C%0A%0AI%20would%20like%20to%20request%20the%20permanent%20deletion%20of%20my%20TripSync%20account.%0A%0ARegistered%20Phone%20or%20Email%3A%20%0AUser%20Name%3A%20%0A%0AThank%20you."
              className="shrink-0 px-6 py-3 rounded-full bg-red-500/20 border border-red-500/40 text-red-200 hover:bg-red-500 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
            >
              Mail Support@tripsync.live
            </a>
          </div>
        </div>

        {/* Tab Selector & Clause Search Bar */}
        <div className="sticky top-20 z-30 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 mb-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 w-full md:w-auto bg-white/5 p-1 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "all"
                  ? "bg-white text-black shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              All Documents
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "terms"
                  ? "bg-white text-black shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Terms of Use
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "privacy"
                  ? "bg-white text-black shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Privacy Policy
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clauses (e.g. escrow, refund)..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Main Content Grid: Table of Contents (Desktop) + Document Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Sidebar Navigation (4 cols) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-40 bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
            <h3 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              Document Architecture
            </h3>
            
            <div className="space-y-4 max-h-[calc(100vh-220px)] overflow-y-auto pr-2 custom-scrollbar">
              {/* Terms Table of Contents */}
              {(activeTab === "all" || activeTab === "terms") && (
                <div>
                  <p className="text-[11px] font-bold uppercase text-white/90 tracking-wider mb-2 border-b border-white/10 pb-1">
                    Terms & Agreement
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    {[
                      { id: "terms-preamble", label: "Preamble & Binding Pact" },
                      { id: "terms-sec1", label: "1. Eligibility & Age Restrictions" },
                      { id: "terms-sec2", label: "2. Legal Intermediary Role" },
                      { id: "terms-sec3", label: "3. Financial Architecture (12% Fee)" },
                      { id: "terms-sec4", label: "4. De-Platforming & Termination" },
                      { id: "terms-sec5", label: "5. Escrow Freeze & Cancellation Hierarchy" },
                      { id: "terms-sec6", label: "6. Organizer Verification (Video KYC)" },
                      { id: "terms-sec7", label: "7. Intellectual Property Separation" },
                      { id: "terms-sec8", label: "8. Prohibited Conduct & Road Safety" },
                      { id: "terms-sec9", label: "9. Indemnification & Liability Ceiling" },
                      { id: "terms-sec10", label: "10. Applicable Law & Jaipur Forum" },
                    ].map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-left py-1 px-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors truncate block"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Privacy Table of Contents */}
              {(activeTab === "all" || activeTab === "privacy") && (
                <div className="pt-2">
                  <p className="text-[11px] font-bold uppercase text-white/90 tracking-wider mb-2 border-b border-white/10 pb-1">
                    Privacy Policy (DPDP Act)
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    {[
                      { id: "privacy-preamble", label: "Privacy Baseline & Consent" },
                      { id: "privacy-sec1", label: "1. Specific Data Categories Collected" },
                      { id: "privacy-sec2", label: "2. Legal Basis & Intended Use" },
                      { id: "privacy-sec3", label: "3. National Identifiers Tokenization" },
                      { id: "privacy-sec4", label: "4. Data Sharing & Platform Nodes" },
                      { id: "privacy-sec5", label: "5. 21-Day Retention & Account Deletion" },
                      { id: "privacy-sec6", label: "6. Security & Encryption Standards" },
                      { id: "privacy-sec7", label: "7. Privacy Grievance Officer" },
                    ].map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-left py-1 px-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors truncate block"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Legal Support Box */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs font-bold text-white mb-1">Grievance & Legal Officer</p>
                  <p className="text-[11px] text-white/50 mb-2">TripSync Internet Private Limited</p>
                  <a
                    href="mailto:Support@tripsync.live"
                    className="text-xs text-white underline hover:text-white/80 transition-colors flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    Support@tripsync.live
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Document Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* ========================================================= */}
            {/* DOCUMENT 1: TRIPSYNC USER AGREEMENT & TERMS OF USE */}
            {/* ========================================================= */}
            {(activeTab === "all" || activeTab === "terms") && (
              <section id="terms-container" className="space-y-12">
                
                {/* Document 1 Header */}
                <div id="terms-preamble" className="border-b border-white/10 pb-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70 mb-3">
                    Part I • Binding Contractual Pact
                  </div>
                  <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    TRIPSYNC PLATFORM USER AGREEMENT & TERMS OF USE
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 mb-6">
                    <span>Effective Date: <strong>June 24, 2026</strong></span>
                    <span>•</span>
                    <span>Last Updated: <strong>June 24, 2026</strong></span>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-white/80 leading-relaxed text-sm space-y-4">
                    <p>
                      This Terms of Use agreement (“Agreement” or “Terms”) constitutes a legally binding contract between{" "}
                      <strong className="text-white">TripSync Internet Private Limited</strong>, a company incorporated under the Companies Act, 2013, having its registered office in Jaipur, Rajasthan, India (hereinafter referred to as &quot;TripSync&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) and any natural or legal person who accesses, downloads, installs, or uses the TripSync mobile application, m-site, or website (collectively referred to as the &quot;Platform&quot;).
                    </p>
                    <p>
                      By downloading, accessing, browsing, or utilizing the Platform as either a general traveler/passenger (“User” or “Participant”) or an itinerary, tour, ride, or convoy coordinator/manager (“Organizer”), you (collectively referred to as &quot;You&quot;, &quot;Your&quot;, or &quot;Member&quot;) expressly acknowledge that you have read, understood, and agreed to be bound by all the conditions contained within this Agreement, along with our Privacy Policy and any other specific operational guidelines published on the Platform.
                    </p>
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-semibold uppercase tracking-wide leading-relaxed">
                      IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST IMMEDIATELY CEASE ALL ACCESS, UNINSTALL THE MOBILE APPLICATION, AND REFRAIN FROM USING ANY SERVICES PROVIDED THROUGH THE TRIPSYNC PLATFORM.
                    </div>
                  </div>
                </div>

                {/* Section 1 */}
                <div id="terms-sec1" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">1</span>
                      PLATFORM ELIGIBILITY, AGE MANDATES & MEMBERSHIP OBLIGATIONS
                    </h3>
                    <button onClick={() => copyLink("terms-sec1")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white" title="Copy section link">
                      {copiedSection === "terms-sec1" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">1.1. Contractual Capacity & Age Restrictions for Users:</h4>
                      <p>
                        Use of the Platform as a standard travel participant, rider, or passenger is available to individuals who are at least 16 years of age. If you are between the ages of 16 and 18, you represent and warrant that you have obtained the explicit permission of a parent or legal guardian to utilize this Platform, and that they agree to be bound by these Terms on your behalf.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">1.2. Age Restrictions for Organizers:</h4>
                      <p>
                        To register an account as an Organizer, create travel groups, orchestrate routes, or publish public/private trips, you must be a minimum of 18 years of age and fully possess the legal capacity to form a binding contract under the Indian Contract Act, 1872. Persons deemed &quot;incompetent to contract&quot; within the meaning of the Indian Contract Act, 1872, including un-discharged insolvents, are strictly ineligible to act as Organizers.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">1.3. Account Integrity & Security Credentials:</h4>
                      <p>
                        Your mobile phone number and verified email address serve as your unique structural identifiers on the Platform. You are solely responsible for maintaining the absolute confidentiality of your display name, application credentials, and passwords. Any and all activities, communications, or financial transactions occurring under your account will be legally and exclusively attributed to you.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">1.4. Information Veracity:</h4>
                      <p>
                        If you provide any registry data that is inaccurate, false, outdated, or incomplete, or if TripSync has reasonable grounds to suspect that such information breaches these guidelines, we reserve the unreviewable right to indefinitely suspend, truncate, or terminate your access without liability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="terms-sec2" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">2</span>
                      LEGAL NATURE OF TRIPSYNC: INTERMEDIARY ROLE & TECHNICAL ABSOLUTION
                    </h3>
                    <button onClick={() => copyLink("terms-sec2")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "terms-sec2" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">2.1. Intermediary Status:</h4>
                      <p>
                        TripSync operates strictly as an AI-powered technology platform, logistical software dashboard, and digital peer-to-peer coordination marketplace. TripSync qualifies as an &quot;intermediary&quot; under Section 2(1)(w) of the Information Technology Act, 2000, and the rules framed thereunder.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">2.2. Principal-to-Principal Relationship:</h4>
                      <p>
                        TripSync is not a transportation provider, common carrier, commercial fleet owner, taxi aggregator, tour operator, or emergency dispatch service. All route configurations, scheduling metrics, compliance with regional vehicular parameters, passenger manifests, and underlying commercial or cost-sharing pacts are settled on a principal-to-principal, bipartite basis directly between the independent Organizer and the participating Users. TripSync is not a party to, nor does it control or assume liability for, any transaction, agreement, driving choice, or interpersonal interaction between members.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">2.3. Operational and Vehicular Control:</h4>
                      <p>
                        TripSync exercises zero physical, operational, editorial, or digital control over the vehicles, driving choices, speeds, throttle responses, navigation interpretations, weather variables, or safety behaviors of any Organizer or User. We do not endorse, guarantee, or inspect the state, mechanical safety, legality, commercial permits, or registration of any vehicle utilized during a coordinated trip.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="terms-sec3" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">3</span>
                      FINANCIAL ARCHITECTURE, REVENUE MANAGEMENT & GATEWAY PROTOCOLS
                    </h3>
                    <button onClick={() => copyLink("terms-sec3")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "terms-sec3" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">3.1. Payment Infrastructure & Integration:</h4>
                      <p>
                        All financial transactions, booking deposits, cost-sharing allocations, or ticketing amounts initiated on the Platform are processed through secure, authorized third-party payment aggregation services, specifically <strong className="text-white">Stripe</strong> and <strong className="text-white">Razorpay</strong>. By initiating a financial transaction on TripSync, you agree to comply with the terms, conditions, and privacy frameworks of these payment processors.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">3.2. Asymmetric Platform Fee Matrix:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white">From Organizers</span>
                          <p className="text-2xl font-bold font-display text-white mt-2">12% Fee</p>
                          <p className="text-xs text-white/60 mt-1">
                            TripSync levies a mandatory platform infrastructure fee of 12% on the gross transaction value of any trip, event registration, or commercial convoy slot published and completed via the Platform. Covers computational architecture, map synchronization, cloud server bandwidth, and payment handling. Automatically deducted prior to final payout.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300">From Users</span>
                          <p className="text-2xl font-bold font-display text-white mt-2">0% Platform Fee</p>
                          <p className="text-xs text-white/60 mt-1">
                            There is no platform fee levied upon standard Users or participants for booking, joining, or interacting with a standard trip slot via the Platform. The amount displayed to the User on checkout represents the direct cost outlined by the Organizer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">3.3. Taxation Responsibilities:</h4>
                      <p>
                        Organizers are strictly and solely responsible for determining, reporting, and remitting any applicable local, state, or central taxes, including Goods and Services Tax (GST), that may be owed on the revenue generated through their trip coordination activities. TripSync does not act as a tax collecting agent and disclaims all liability regarding the structural tax defaults of its Organizers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="terms-sec4" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">4</span>
                      DE-PLATFORMING, ACCOUNT BLOCKING & TERMINATION POLICY
                    </h3>
                    <button onClick={() => copyLink("terms-sec4")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "terms-sec4" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">4.1. The Behavioral Deregistration Metric:</h4>
                      <p>
                        To preserve the physical safety, psychological integrity, and regulatory compliance of the community, TripSync implements a strict behavioral deregistration framework. TripSync reserves the absolute, unilateral, and unreviewable right to immediately deactivate, restrict, freeze, or permanently block any User or Organizer account from the Platform, mimicking robust safety protocols found in leading global mobility networks.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-2">4.2. Grounds for Direct De-Platforming and Blocking:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-white font-bold block text-xs mb-1">• Safety Violations & Recklessness:</span>
                          <span className="text-xs text-white/60">Credible reports or telemetry indications of operating vehicles under the influence, excessive speeding, continuous lane infractions, or general roadway recklessness.</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-white font-bold block text-xs mb-1">• Low Star-Ratings & Feedback:</span>
                          <span className="text-xs text-white/60">Maintenance of a cumulative user review rating below the platform-established threshold over a rolling period.</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-white font-bold block text-xs mb-1">• Harassment & Toxicity:</span>
                          <span className="text-xs text-white/60">Engaging in discriminatory, abusive, sexual, threatening, or hostile behavior via group chats, trip comments, or physical travel sessions.</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-white font-bold block text-xs mb-1">• Platform Circumvention:</span>
                          <span className="text-xs text-white/60">Intentionally soliciting or encouraging users to complete payments outside the platform's payment gateways to evade the 12% Organizer fee.</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 sm:col-span-2">
                          <span className="text-white font-bold block text-xs mb-1">• Fraudulent Alerts:</span>
                          <span className="text-xs text-white/60">Initiating deliberately false SOS alerts, non-existent crash notifications, or staging phantom itineraries.</span>
                        </div>
                      </div>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">4.3. Effect of a Block:</h4>
                      <p>
                        Any User or Organizer who has been blocked or blacklisted will be permanently barred from creating duplicate profiles, accessing ongoing trip details, or retrieving platform benefits. Any funds active in escrow at the time of de-platforming will be audited under the protocols outlined in Section 5.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 5 - Transaction Standards, Disputes & Escrow Matrix */}
                <div id="terms-sec5" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">5</span>
                      TRANSACTION STANDARDS, DISPUTES & RIGID ESCROW FREEZE CONTROLS
                    </h3>
                    <button onClick={() => copyLink("terms-sec5")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "terms-sec5" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">5.1. The TripSync Escrow Hold:</h4>
                      <p>
                        To protect the structural and financial integrity of the marketplace, all transaction values paid by a User for a scheduled trip are collected on a principal-to-principal basis and held securely by our processing systems. The total transaction amount (less the 12% Organizer fee) is released to the Organizer only upon successful verification that the trip has concluded according to the terms specified on the trip listing page.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">5.2. The &quot;Escrow Freeze&quot; Protocol for System Threats:</h4>
                      <p>
                        TripSync maintains an absolute, legally defensive right to enforce a mandatory financial freeze on funds held in escrow or within an Organizer&apos;s or User&apos;s platform account dashboard. This freeze may be initiated instantly, without prior notice, under any of the following threat conditions:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-white/60">
                        <li><strong className="text-white/80">Suspicion of Fraud or Exploitative Conduct:</strong> Credible reports, automated fraud detection alerts, bad-faith cancellations, false listings, phantom trips, or misleading itineraries.</li>
                        <li><strong className="text-white/80">KYC Compliance Discrepancy:</strong> Failure by an Organizer to clear the mandatory verification gates outlined in Section 6.</li>
                        <li><strong className="text-white/80">Safety Violations:</strong> Accusations or indications of reckless endangerment, structural vehicle flaws hidden from participants, or non-compliance with regional transit permits.</li>
                        <li><strong className="text-white/80">Administrative or Legal Mandates:</strong> Active requests, investigations, or formal circulars issued by law enforcement, judicial bodies, or statutory enforcement agencies.</li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">5.3. Impact and Legal Indemnity for Funds Frozen under Threat:</h4>
                      <p>
                        Once a financial freeze is implemented, funds will remain locked until a comprehensive verification cycle finishes. TripSync explicitly disclaims all liability, vicarious or direct, for indirect losses, economic disruptions, interest accruals, or consequential damages sustained by an Organizer or User during an active, threat-mitigating asset freeze.
                      </p>
                    </div>
                  </div>

                  {/* 5.4 Visual Refund & Cancellation Flowchart */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/10 text-white">Matrix 5.4</span>
                      <h4 className="text-lg font-bold font-display text-white">
                        RIGID REFUND AND CANCELLATION HIERARCHY
                      </h4>
                    </div>

                    {/* Interactive Visual Hierarchy Diagram */}
                    <div className="p-6 md:p-8 rounded-3xl bg-black/60 border border-white/15 relative overflow-hidden shadow-2xl">
                      {/* Top Node */}
                      <div className="flex flex-col items-center text-center mb-6">
                        <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-white text-xs md:text-sm font-bold shadow-lg flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-emerald-400" />
                          User Initiates Booking & Pays Into Platform Escrow
                        </div>
                        <div className="w-[2px] h-6 bg-white/30 my-1" />
                        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-white/80 text-xs font-semibold">
                          Who Initiated Cancellation?
                        </div>
                      </div>

                      {/* Branching Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                        {/* Organizer Branch */}
                        <div className="flex flex-col items-center p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                          <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-[10px] font-bold uppercase tracking-wider mb-3">
                            Organizer Initiated
                          </span>
                          <div className="w-full p-4 rounded-xl bg-white/5 border border-emerald-500/30 text-left space-y-2">
                            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                              <CheckCircle2 className="w-4 h-4" />
                              100% Full User Refund
                            </div>
                            <p className="text-xs text-white/80 leading-relaxed">
                              Platform escrow pool immediately reverses the full transaction. Participating Users receive 100% of the base fee back.
                            </p>
                            <span className="inline-block text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                              Organizer penalized or blocked
                            </span>
                          </div>
                        </div>

                        {/* User / Visitor Branch */}
                        <div className="flex flex-col items-center p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-3">
                            User / Visitor Initiated
                          </span>
                          
                          <div className="w-full text-xs text-white/60 mb-2">Check Time Elapsed Before Scheduled Departure</div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                            {/* > 48 Hours */}
                            <div className="p-3 rounded-xl bg-white/5 border border-emerald-500/20 text-left">
                              <div className="text-[11px] font-bold text-emerald-400 mb-1">&gt; 48 Hours Out</div>
                              <p className="text-[11px] text-white/80 leading-tight">
                                Full Base Refund less payment gateway fees.
                              </p>
                            </div>

                            {/* < 48 Hours */}
                            <div className="p-3 rounded-xl bg-white/5 border border-red-500/30 text-left">
                              <div className="text-[11px] font-bold text-red-400 mb-1">&lt; 48 Hours Out</div>
                              <p className="text-[11px] text-white/80 leading-tight">
                                Strict Liquidated Damages: Zero Refund.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Explanatory Clauses */}
                      <div className="mt-8 space-y-3 text-xs text-white/70 leading-relaxed border-t border-white/10 pt-6">
                        <p>
                          <strong className="text-white">Cancellation by the Organizer:</strong> If an Organizer cancels a confirmed trip or ride session for any reason other than a verified Force Majeure event, the platform escrow pool will immediately reverse the transaction. Participating Users will receive a 100% refund of the base fee. The Organizer may be subject to platform penalties, account flags, or immediate blocking.
                        </p>
                        <p>
                          <strong className="text-white">Cancellation by the User (Standard Window):</strong> If a User cancels their participation in a scheduled trip more than 48 hours prior to the designated departure time, they shall be eligible for a refund of the base trip fee, net of non-refundable external transaction gateway charges.
                        </p>
                        <p>
                          <strong className="text-white">Cancellation by the User (Late Window):</strong> If a User cancels their participation within 48 hours of the scheduled trip departure, or fails to report to the designated checkpoint/meeting layout (a &quot;No-Show&quot;), the transaction will be treated as fully consumed. The User will not be entitled to a refund. This late-stage forfeiture constitutes agreed-upon liquidated damages designed to insulate the Organizer from last-minute financial loss.
                        </p>
                        <p>
                          <strong className="text-white">Exceptions for Remedial Action:</strong> If an alternate participant is successfully matched from a platform waitlist to fill the slot vacated by a late cancellation, TripSync may, at its sole discretion, issue a partial platform credit note to the canceling User, subject to an administrative processing fee.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 - Organizer Verification Policies */}
                <div id="terms-sec6" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">6</span>
                      ORGANIZER VERIFICATION POLICIES & SECURITY CONTROLS
                    </h3>
                    <button onClick={() => copyLink("terms-sec6")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "terms-sec6" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">6.1. Mandatory Identity Verification:</h4>
                      <p>
                        To foster a compliant community, minimize cross-border platform risks, and eliminate dangerous actors, all Organizers must complete a robust identification vetting workflow before being permitted to publish trip listings, create public convoy groups, or collect user funds.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-2">6.2. Required Submissions:</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs text-white/80">
                        <li>Full legal name, verified contact information, and proof of residential address.</li>
                        <li>Legally valid, unexpired government-issued credentials (such as a valid Driver&apos;s License or relevant taxation filings where commercial tour operations apply).</li>
                        <li><strong className="text-white">Live Video Verification (Video KYC):</strong> A real-time or securely captured video transmission to verify live physical identity against the uploaded credential documentation.</li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">6.3. Independent Data Protection Restrictions:</h4>
                      <p>
                        To comply with regional constitutional laws, privacy protections, and statutory personal data regulations, the processing of any foundational national identification documents (such as Aadhaar data within the Republic of India) is subjected to strict tokenization. The numeric digits of such forbidden or strictly protected identifiers are never structurally exposed, published, printed, or rendered legible to any employee, end-user, third party, or partner on the Platform.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">6.4. Refusal and Processing Windows:</h4>
                      <p>
                        TripSync reserves the right to withhold onboarding approvals or dynamically limit an Organizer’s layout options until identity verification is finalized. Documents uploaded during a deletion workflow or specialized audit may be securely retained for an explicit compliance cycle of up to 21 days from the date of account closure to satisfy cross-verification rules before irreversible erasure occurs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 7 - Intellectual Property */}
                <div id="terms-sec7" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">7</span>
                      INTELLECTUAL PROPERTY & PRIVACY POLICY STRUCTURAL INDEPENDENCE
                    </h3>
                    <button onClick={() => copyLink("terms-sec7")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "terms-sec7" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">7.1. Absolute Proprietary Separation:</h4>
                      <p>
                        This Agreement and its corresponding Privacy Policy represent a completely independent legal framework. TripSync does not incorporate, borrow, adapt, copy, or rely upon the specific operational provisions, proprietary terms, structural wording, or standard privacy policies of unrelated entities or external booking platforms. This document is custom-engineered to meet the unique structural profile of TripSync&apos;s proprietary software architecture.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">7.2. Platform IP Ownership:</h4>
                      <p>
                        All text, graphics, design assets, visual interfaces, algorithmic components, logic models, map integration layouts, and trademark assets are the exclusive property of TripSync or its licensed technology partners. You are granted a revocable, non-transferable, non-commercial personal license to install the application on your personal device solely to access the coordination systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 8 - Prohibited Conduct & Road Safety */}
                <div id="terms-sec8" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">8</span>
                      PROHIBITED CONDUCT AND ROADWAY SAFETY ABSOLUTION
                    </h3>
                    <button onClick={() => copyLink("terms-sec8")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "terms-sec8" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">8.1. Lawful Driving Imperative:</h4>
                      <p>
                        The Platform must never be utilized, referenced, or interacted with by a driver while operating a moving vehicle. All interaction with the application must occur when stationary or be handled exclusively by designated passengers or navigating group members.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">8.2. Compliance with Traffic Laws:</h4>
                      <p>
                        Users and Organizers must strictly abide by all local transit codes, speed limits, helmet and seatbelt protocols, insurance requirements, and vehicular laws of the respective jurisdiction. The use of TripSync&apos;s AI Route Planning or Convoy Tracking feature shall never serve as a defense or justification for reckless driving, racing, lane infractions, or illegal transit maneuvers.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">8.3. System Misuse:</h4>
                      <p>
                        You are explicitly prohibited from uploading malware, scraping user data via automated scripts or reverse-engineering tools, issuing fraudulent SOS or Emergency Alerts, or exploiting the real-time location streaming components to harass, stalk, or compromise any Member of the community.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 9 - Indemnification & Liability Ceiling */}
                <div id="terms-sec9" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">9</span>
                      INDEMNIFICATION & STRUCTURAL LIMITATIONS OF LIABILITY
                    </h3>
                    <button onClick={() => copyLink("terms-sec9")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "terms-sec9" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">9.1. Maximum Indemnity Hold-Harmless:</h4>
                      <p>
                        To the maximum extent permitted under applicable law, You agree to protect, defend, indemnify, and hold harmless TripSync, its corporate parent entities, subsidiaries, officers, directors, software developers, and agents from any claims, structural losses, bodily injuries, vehicular damages, fatal accidents, statutory fines, or legal expenses arising out of or directly linked to:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-white/80">
                        <li>Your physical behavior, navigation choices, or operational driving decisions during a trip.</li>
                        <li>Any structural, physical, or performance failure of vehicles utilized by members.</li>
                        <li>Your breach of any clause of this Agreement or your infringement of third-party privacy or property rights.</li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">9.2. Structural Ceiling on Liability:</h4>
                      <p className="p-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium">
                        In no event shall TripSync’s aggregate financial liability for any dispute, claim, or transaction shortfall arising under these terms exceed the total platform fees actually retained by the Company from your specific transactions during the 3-month window immediately preceding the event giving rise to liability, or five thousand Indian Rupees (INR 5,000), whichever is lesser.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 10 - Applicable Law & Jurisdiction */}
                <div id="terms-sec10" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">10</span>
                      APPLICABLE LAW & JURISDICTIONAL MANDATES
                    </h3>
                    <button onClick={() => copyLink("terms-sec10")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "terms-sec10" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">10.1. Governing Law:</h4>
                      <p>
                        This Agreement, its structural interpretation, and any operational disputes arising out of your utilization of the coordination systems shall be governed exclusively by the laws of India, without regard to conflict-of-law principles.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">10.2. Exclusive Forum:</h4>
                      <p>
                        Any legal actions, regulatory petitions, or constitutional proceedings permitted under this contract must be filed exclusively before the competent courts of jurisdiction located in <strong className="text-white">Jaipur, Rajasthan, India</strong>.
                      </p>
                    </div>
                  </div>
                </div>

              </section>
            )}

            {/* ========================================================= */}
            {/* DOCUMENT 2: TRIPSYNC PRIVACY POLICY */}
            {/* ========================================================= */}
            {(activeTab === "all" || activeTab === "privacy") && (
              <section id="privacy-container" className="space-y-12 pt-8">
                
                {/* Document 2 Header */}
                <div id="privacy-preamble" className="border-b border-white/10 pb-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70 mb-3">
                    Part II • Data Protection & DPDP Compliance
                  </div>
                  <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    TRIPSYNC PLATFORM PRIVACY POLICY
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 mb-6">
                    <span>Effective Date: <strong>June 24, 2026</strong></span>
                    <span>•</span>
                    <span>Last Updated: <strong>June 24, 2026</strong></span>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-white/80 leading-relaxed text-sm space-y-4">
                    <p>
                      TripSync Internet Private Limited (“TripSync”, “we”, “our”, or “us”) values the trust you place in our platform and recognizes the absolute importance of personal data security, transaction integrity, and information privacy. This Privacy Policy describes how we collect, process, utilize, share, store, and safeguard your personal data across the TripSync ecosystem, which includes our mobile applications, m-sites, websites, and integrated artificial intelligence sub-modules (collectively, the &quot;Platform&quot;).
                    </p>
                    <p>
                      This Privacy Policy is systematically aligned with the Digital Personal Data Protection Act (DPDP Act) of India, the Indian Information Technology Act, 2000, and standard global data safety requirements. By interacting with our Platform, installing the application, or validating your user profile, you provide your explicit, informed, unambiguous, and revocable consent to the data cycles detailed below. If you do not agree with these practices, please refrain from using or accessing our Sales Channels.
                    </p>
                  </div>
                </div>

                {/* Privacy Section 1 */}
                <div id="privacy-sec1" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">1</span>
                      SPECIFIC DATA CATEGORIES WE COLLECT
                    </h3>
                    <button onClick={() => copyLink("privacy-sec1")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "privacy-sec1" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-sm text-white/70">
                    The information we collect is structured to provide an optimized group travel environment. We segment our data points as follows:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <span className="text-white font-bold block mb-1 text-sm">Account & Identity Data</span>
                      <p className="text-white/60 leading-relaxed">
                        Full name, mobile number, email address, alphanumeric display name, and profile photos. For Organizers, this includes identity verification assets (Video KYC transmissions and verified credential files).
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <span className="text-white font-bold block mb-1 text-sm">Live Geolocation Telemetry (Foreground & Background)</span>
                      <p className="text-white/60 leading-relaxed">
                        Real-time GPS coordinates, route pathways, travel tracking histories, check-in data, and convoy position indicators. To ensure the functionality of features like Convoy Split Detection and Lost Member Alerts, the app requires continuous background location permissions while a trip session is actively running.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <span className="text-white font-bold block mb-1 text-sm">Vehicle & Travel Preference Profiles</span>
                      <p className="text-white/60 leading-relaxed">
                        Vehicle manufacturer specs, model designations, fuel consumption profiles, and riding patterns.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <span className="text-white font-bold block mb-1 text-sm">AI Interaction Records</span>
                      <p className="text-white/60 leading-relaxed">
                        Text prompts, travel planning parameters, search contextualization metadata, and choices generated through our Travel Assistant Chatbot or itinerary builders.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 md:col-span-2">
                      <span className="text-white font-bold block mb-1 text-sm">Device Telemetry & Log Audits</span>
                      <p className="text-white/60 leading-relaxed">
                        Device identifiers, IP addresses, operating system variables, hardware models, network operator logs, and performance crash metrics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Privacy Section 2 */}
                <div id="privacy-sec2" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">2</span>
                      LEGAL BASIS AND INTENDED UTILIZATION OF PERSONAL DATA
                    </h3>
                    <button onClick={() => copyLink("privacy-sec2")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "privacy-sec2" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed">
                    We process your personal information strictly under verified legal baselines to execute our contractual responsibilities, satisfy legal regulations, and defend public safety. Your data is used to:
                  </p>

                  <ul className="space-y-2 text-xs md:text-sm text-white/80">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Initialize secure client authentication and account management through our validation handlers.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Synchronize interactive shared travel maps, real-time convoy metrics, and regroup notification systems.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Fuel our proprietary AI subsystems to produce tailored itineraries, automated packing breakdowns, fuel station schedules, and real-time weather risk matrix evaluations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Manage our platform escrow systems, process billing requirements, and implement rapid escrow freezes to protect the marketplace from fraud.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Trigger automated messaging workflows and transmit immediate safety alerts or SOS data vectors to your designated emergency contacts and group members during an active emergency event.</span>
                    </li>
                  </ul>
                </div>

                {/* Privacy Section 3 */}
                <div id="privacy-sec3" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">3</span>
                      FORBIDDEN ACCESSIBILITY: RESTRICTIONS ON NATIONAL IDENTIFIERS
                    </h3>
                    <button onClick={() => copyLink("privacy-sec3")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "privacy-sec3" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">3.1. Strict Tokenization Protocol:</h4>
                      <p>
                        To comply with national identity laws and personal privacy metrics, whenever an Organizer submits foundational national identity numbers or cards for statutory compliance or cross-border fraud analysis, TripSync subjects that data to a strict encryption and tokenization process.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">3.2. Absolute Non-Disclosure:</h4>
                      <p>
                        The raw numeric digits or unmasked graphic representations of sensitive national identity indices (such as Aadhaar data) are never permanently written to readable log files, are never stored in plain-text configurations, and are completely blocked from external or internal interface displays. No third party, customer support executive, or platform member can access or view these sensitive identifiers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Privacy Section 4 */}
                <div id="privacy-sec4" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">4</span>
                      CONTROLLED TRADING & DATA SHARING CHANNELS
                    </h3>
                    <button onClick={() => copyLink("privacy-sec4")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "privacy-sec4" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed">
                    TripSync does not sell or rent individual customer lists or personal contact sheets to third-party brokers. We disclose filtered personal data variables only to the following specific nodes:
                  </p>

                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <span className="text-white font-bold block text-sm mb-1">• The Active Travel Group Interface:</span>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Fellow convoy members, designated Lead Riders, and Sweep Riders can see your real-time location metrics and profile status while a trip session is active.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <span className="text-white font-bold block text-sm mb-1">• Onboarded Technology & Payment Partners:</span>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Secure processing entities necessary to maintain app stability, infrastructure scaling, and payment handling. This includes Stripe and Razorpay (payment transaction services), Clerk (identity tokenization), Supabase (database hosting), Mapbox / Google Maps (navigation tiles), and verified AI engine providers (OpenAI, Anthropic, Google Gemini).
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <span className="text-white font-bold block text-sm mb-1">• Legal Enforcement Disclosures:</span>
                      <p className="text-xs text-white/60 leading-relaxed">
                        We reserve the right to share your information with competent law enforcement bodies or judicial officers if required to do so under an active subpoena, statutory mandate, or system threat verification audit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Privacy Section 5 - Retention & Account Deletion */}
                <div id="privacy-sec5" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">5</span>
                      RETENTION SCHEDULING & DATA ERASURE RIGHTS
                    </h3>
                    <button onClick={() => copyLink("privacy-sec5")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "privacy-sec5" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">5.1. Standard Retention Window:</h4>
                      <p>
                        Your personal telemetry and usage data are retained only as long as necessary to execute the transaction loops described herein, or to satisfy statutory tax, auditing, and corporate regulatory storage requirements.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">5.2. Data Deletion Workflow:</h4>
                      <p>
                        You hold an absolute right to execute profile removal workflows. Upon triggering an account deletion request through your application settings panel or by notifying our Data Protection Officer, the Platform enters a mandatory 21-day verification buffer. This processing delay is strictly designed to allow pending escrow clearances, dispute resolutions, or active identity checks to settle.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-white/20">
                      <h4 className="text-white font-semibold text-sm mb-1">5.3. Permanent Anonymization:</h4>
                      <p>
                        Once the 21-day window concludes without a security flag, your personally identifiable information is wiped from our primary production clusters. Any legacy transactional data or navigation maps kept for system analytics are irreversibly anonymized.
                      </p>
                    </div>

                    {/* Explicit Account Deletion Clause Added */}
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-red-500/10 via-white/[0.02] to-red-500/10 border border-red-500/30">
                      <div className="flex items-center gap-2 text-red-300 font-bold text-sm uppercase tracking-wider mb-2">
                        <UserX className="w-4 h-4" />
                        5.4. Account Deletion Request Mandate
                      </div>
                      <p className="text-white/90 text-sm font-medium leading-relaxed">
                        If you want to delete your account, mail us at{" "}
                        <a href="mailto:Support@tripsync.live" className="text-white underline font-bold hover:text-red-300">
                          Support@tripsync.live
                        </a>
                        . You can also initiate deletion directly through the TripSync mobile application under Settings → Profile → Delete Account. All deletion requests enter the 21-day verification period before irreversible deletion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Privacy Section 6 */}
                <div id="privacy-sec6" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">6</span>
                      SYSTEM SECURITY & SAFEGUARDS
                    </h3>
                    <button onClick={() => copyLink("privacy-sec6")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "privacy-sec6" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed">
                    All transaction parameters, communication layers, and live location coordinate logs are transmitted securely using Transport Layer Security (TLS) encryption configurations. We host our workflows within industry-recognized cloud infrastructures (AWS, Vercel, and Cloudflare) that utilize strict firewall protocols and around-the-clock threat mitigation monitoring. However, you acknowledge that no transmission framework across the global internet can be guaranteed as completely secure, and you accept these native risks when interacting with the system.
                  </p>
                </div>

                {/* Privacy Section 7 - Grievance Redressal */}
                <div id="privacy-sec7" className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">7</span>
                      PRIVACY OFFICER & GRIEVANCE REDRESSAL CHANNELLING
                    </h3>
                    <button onClick={() => copyLink("privacy-sec7")} className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white">
                      {copiedSection === "privacy-sec7" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed">
                    In strict compliance with the Information Technology Act, 2000 and the DPDP Act, the contact details for our designated Privacy Grievance Handler are itemized below. If you have any inquiries regarding your data boundaries, wish to execute your right to withdraw consent, or want to delete your account, please contact us at:
                  </p>

                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                    <div>
                      <p className="text-xs uppercase font-bold tracking-widest text-white/40">Designation</p>
                      <p className="font-display font-bold text-lg text-white">Attn: Data Protection Officer</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-bold tracking-widest text-white/40">Registered Office Address</p>
                      <p className="text-sm text-white/80">
                        TripSync Internet Private Limited<br />
                        Block C, Platform Infrastructure Zone,<br />
                        Jaipur, Rajasthan, India - 302017
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase font-bold tracking-widest text-white/40">Official Communications</p>
                        <a href="mailto:Support@tripsync.live" className="text-sm font-bold text-white hover:text-white/80 underline flex items-center gap-1.5 mt-0.5">
                          <Mail className="w-4 h-4 text-white/60" />
                          Support@tripsync.live
                        </a>
                      </div>

                      <a
                        href="mailto:Support@tripsync.live?subject=Account%20Deletion%20Request"
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all"
                      >
                        Delete Account Mail Link
                      </a>
                    </div>
                  </div>
                </div>

              </section>
            )}

          </div>
        </div>

        {/* Back to top button */}
        <div className="mt-16 text-center border-t border-white/10 pt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs uppercase font-bold tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            Back To Top ↑
          </button>
        </div>

      </div>

      {/* Footer is rendered at the bottom */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
