import React, { JSX, useState } from 'react';

const IconTerminal = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

const IconGithub = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const IconBook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const IconShield = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconLayers = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 12 12 17 22 12"></polyline>
    <polyline points="2 17 12 22 22 17"></polyline>
  </svg>
);

const IconCopy = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const IconCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const LANGUAGES: Record<string, { id: string; name: string; command: string; repo: string; color: string; code: string }> = {
  ts: {
    id: 'ts',
    name: 'TypeScript / JS',
    command: 'npm install @feature-gate/core',
    repo: 'https://github.com/feature-gate/core-js',
    color: 'border-blue-500',
    code: `import { FeatureManagementService } from '@feature-gate/core';
import { StatsigProvider } from '@feature-gate/provider-statsig';

// 1. Initialize your provider
const provider = new StatsigProvider('client-key');

// 2. Wrap it in the unified service (Safe by default)
const fm = new FeatureManagementService(provider);

// 3. Evaluate flags without fear of crashes
if (fm.isEnabled('new_checkout_flow')) {
  renderNewCheckout();
} else {
  renderLegacyCheckout();
}`
  },
  go: {
    id: 'go',
    name: 'Go',
    command: 'go get github.com/feature-gate/core-go',
    repo: 'https://github.com/feature-gate/core-go',
    color: 'border-cyan-500',
    code: `import (
    "github.com/feature-gate/core-go"
    "github.com/feature-gate/core-go/providers/unleash"
)

// 1. Initialize your provider
provider := unleash.NewProvider("api-url", "token")

// 2. Wrap it in the unified service
fm := core.NewFeatureManagementService(provider)

// 3. Evaluate safely
if fm.IsEnabled("new_checkout_flow") {
    // Handle new checkout
} else {
    // Fallback
}`
  },
  rust: {
    id: 'rust',
    name: 'Rust',
    command: 'cargo add feature-gate-core',
    repo: 'https://github.com/feature-gate/core-rs',
    color: 'border-orange-600',
    code: `use feature_gate_core::FeatureManagementService;
use feature_gate_core::providers::DummyProvider;

// 1. Initialize your provider
let provider = DummyProvider::new();

// 2. Wrap it in the unified service
let fm = FeatureManagementService::new(provider);

// 3. Evaluate safely
if fm.is_enabled("new_checkout_flow") {
    execute_new_path();
} else {
    execute_legacy_path();
}`
  },
  python: {
    id: 'python',
    name: 'Python',
    command: 'pip install feature-gate-core',
    repo: 'https://github.com/feature-gate/core-py',
    color: 'border-yellow-500',
    code: `from feature_gate_core import FeatureManagementService
from feature_gate_core.providers import StatsigProvider

# 1. Initialize your provider
provider = StatsigProvider('server-secret')

# 2. Wrap it in the unified service
fm = FeatureManagementService(provider)

# 3. Evaluate safely
if fm.is_enabled('new_checkout_flow'):
    execute_new_path()
else:
    execute_legacy_path()`
  }
};

export default function Home(): JSX.Element {
  const [activeLang, setActiveLang] = useState('ts');
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const langData = LANGUAGES[activeLang];

  return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30">

        <header className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 flex items-center justify-center font-mono font-bold text-zinc-950">
                [ ]
              </div>
              <span className="font-mono font-semibold tracking-tight text-lg">feature-gate<span className="text-zinc-500">/core</span></span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#architecture" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">Architecture</a>
              <a href="/knowledge-core/docs/intro" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                <IconBook className="w-4 h-4" />
                Docs
              </a>
            </nav>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-mono uppercase tracking-wider rounded-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Production Ready API
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Evaluate flags. <br />
              <span className="text-zinc-500">Never crash.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
              A unified, fail-safe API for feature toggles and remote configuration. Write your application logic once, and swap backend providers (Statsig, Unleash, etc.) without altering a single line of business code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quickstart" className="inline-flex items-center justify-center gap-2 bg-orange-500 text-zinc-950 font-semibold px-6 py-3 hover:bg-orange-400 transition-colors">
                <IconTerminal className="w-5 h-5" />
                Start Building
              </a>
              <a href="https://github.com/feature-gate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white font-medium px-6 py-3 hover:bg-zinc-800 transition-colors">
                <IconGithub className="w-5 h-5" />
                View Organization
              </a>
            </div>
          </div>
        </section>

        <section id="architecture" className="border-y border-zinc-800/50 bg-zinc-900/20">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">

              <div>
                <h2 className="text-3xl font-bold mb-4">The Two-Layer Architecture</h2>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Most feature flag libraries tightly couple your application logic to their specific network requests and error handling. <code>@feature-gate/core</code> introduces a deliberate boundary.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                      <IconLayers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono font-semibold text-white mb-1">1. The Provider</h3>
                      <p className="text-sm text-zinc-400">A lightweight wrapper around specific vendor SDKs (Statsig, Unleash). It strictly handles the network connection and fetching rules.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
                      <IconShield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono font-semibold text-orange-400 mb-1">2. FeatureManagementService</h3>
                      <p className="text-sm text-zinc-400">The stable API your application actually consumes. It catches all exceptions from the Provider layer, ensuring your app defaults safely if the network drops or the vendor goes down.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative border border-zinc-800 bg-zinc-950 p-6 font-mono text-sm">
                <div className="absolute top-0 right-0 p-2 text-xs text-zinc-600 border-b border-l border-zinc-800">System Diagram</div>

                <div className="border border-zinc-800 border-dashed p-4 mb-4 text-center text-zinc-500">
                  Your Application Logic
                </div>

                <div className="flex justify-center my-2 text-zinc-700">↓</div>

                <div className="border border-orange-500/50 bg-orange-500/5 p-4 mb-4 text-center">
                  <span className="text-orange-400 font-bold">FeatureManagementService</span>
                  <div className="text-xs text-zinc-500 mt-1">Catch errors & return fallback</div>
                </div>

                <div className="flex justify-center my-2 text-zinc-700">↓</div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-zinc-700 bg-zinc-900 p-3 text-center text-zinc-300 text-xs">
                    StatsigProvider
                  </div>
                  <div className="border border-zinc-700 bg-zinc-900 p-3 text-center text-zinc-300 text-xs">
                    UnleashProvider
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quickstart" className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Multi-Language Parity</h2>
            <p className="text-zinc-400">Consistent behavior and exact same API contracts across your entire stack.</p>
          </div>

          <div className="border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <div className="flex overflow-x-auto border-b border-zinc-800 hide-scrollbar bg-zinc-950">
              {Object.values(LANGUAGES).map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setActiveLang(lang.id)}
                  className={`px-6 py-4 font-mono text-sm transition-all whitespace-nowrap border-b-2 ${
                    activeLang === lang.id
                      ? `border-orange-500 text-white bg-zinc-900/80`
                      : `border-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40`
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-5 gap-8">

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Install Package</h3>
                  <div className="group flex items-center justify-between border border-zinc-700 bg-zinc-950 p-3 hover:border-zinc-500 transition-colors">
                    <code className="font-mono text-sm text-zinc-300 overflow-x-auto whitespace-nowrap hide-scrollbar">{langData.command}</code>
                    <button
                      onClick={() => handleCopy(langData.command)}
                      className="ml-4 p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors flex-shrink-0"
                      aria-label="Copy command"
                    >
                      {copied ? <IconCheck className="w-4 h-4 text-green-500" /> : <IconCopy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Resources</h3>
                  <div className="space-y-2">
                    <a
                      href={langData.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 border border-zinc-800 bg-zinc-950 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <IconGithub className="w-4 h-4 text-zinc-400 group-hover:text-orange-400" />
                        <span className="font-medium text-sm text-zinc-300 group-hover:text-white">GitHub Repository</span>
                      </div>
                      <span className="text-zinc-600 group-hover:text-orange-500 transition-colors">→</span>
                    </a>

                    <a
                      href="/knowledge-core/docs/intro"
                      className="flex items-center justify-between p-3 border border-zinc-800 bg-zinc-950 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <IconBook className="w-4 h-4 text-zinc-400 group-hover:text-orange-400" />
                        <span className="font-medium text-sm text-zinc-300 group-hover:text-white">Official Documentation</span>
                      </div>
                      <span className="text-zinc-600 group-hover:text-orange-500 transition-colors">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 border border-zinc-800 bg-[#0d0d0d] relative group">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
                <div className="flex items-center px-4 py-2 border-b border-zinc-800/80">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                  </div>
                  <div className="ml-4 text-xs font-mono text-zinc-500">example.{langData.id}</div>
                </div>
                <div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-zinc-300">
                  <pre>
                    <code>{langData.code}</code>
                  </pre>
                </div>
              </div>

            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-center text-zinc-500 font-mono text-sm">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              Built by the feature-gate organization.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/feature-gate" className="hover:text-zinc-300 transition-colors">GitHub</a>
              <a href="/knowledge-core/docs/intro" className="hover:text-zinc-300 transition-colors">Docs</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">License</a>
            </div>
          </div>
        </footer>

        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
      </div>
  );
}
