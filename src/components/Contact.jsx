import { useState } from 'react';
import { Section, isPlaceholder } from './ui.jsx';
import { BrandIcon, Icon } from './Icon.jsx';
import { profile } from '../data/profile.js';

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the mailto link still works */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-3 py-2 text-sm font-medium text-ink-100 hover:border-ink-400 hover:bg-ink-800"
    >
      <Icon name={copied ? 'check' : 'copy'} className="size-4" />
      {copied ? 'Copied' : 'Copy email'}
      <span className="sr-only" role="status">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </button>
  );
}

function Row({ icon, label, children }) {
  return (
    <div className="grid grid-cols-[2.25rem_1fr] items-start gap-x-3 border-b border-ink-700 py-4 last:border-b-0 sm:grid-cols-[2.25rem_7rem_1fr]">
      <span className="mt-0.5 text-ink-300">{icon}</span>
      <dt className="text-sm text-ink-300 sm:pt-0.5">{label}</dt>
      <dd className="col-start-2 text-ink-50 sm:col-start-3">{children}</dd>
    </div>
  );
}

const linkCls = 'underline decoration-ink-500 underline-offset-4 hover:decoration-signal';
const ph = (v) => (isPlaceholder(v) ? 'placeholder-link !border-0 !border-b !px-0' : '');

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      intro="I'm open to junior DevOps and cloud roles and to internship programs. Send me a message and I'll get back to you."
      className="border-t border-ink-800"
    >
      <dl className="max-w-3xl border-y border-ink-700">
          <Row icon={<Icon name="mail" />} label="Email">
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className={`${linkCls} ${ph(profile.email)}`}>
                {profile.email}
              </a>
              <CopyEmail />
            </div>
          </Row>
          <Row icon={<Icon name="phone" />} label="Phone">
            <a href={profile.phoneHref} className={linkCls}>
              {profile.phone}
            </a>
          </Row>
          <Row icon={<Icon name="pin" />} label="Location">
            {profile.location}
          </Row>
          <Row icon={<BrandIcon name="github" />} label="GitHub">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${linkCls} ${ph(profile.github)}`}>
              {profile.github.replace('https://', '')}
            </a>
          </Row>
          <Row icon={<BrandIcon name="linkedin" />} label="LinkedIn">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`${linkCls} ${ph(profile.linkedin)}`}>
              {profile.linkedin.replace('https://', '')}
            </a>
          </Row>
        </dl>
    </Section>
  );
}
