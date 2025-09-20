import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import './index.scss';
import { idlFactory, canisterId } from './declarations/backend';
import AppRouter from './router';
import './i18n';

console.log('canisterId:', idlFactory);
ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <AppRouter />
      </ActorProvider>
    </AgentProvider>
  </React.StrictMode>,
);
