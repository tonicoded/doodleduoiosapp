import Link from 'next/link'

const LAST_UPDATED = 'November 26, 2025'
const SITE_URL = 'https://doodleduoapp.com'

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-[#3a2c2b]">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.4em] text-[#ad75ba]">privacy policy</p>
        <h1 className="text-4xl font-black lowercase">how we keep your data cozy</h1>
        <p className="text-sm text-[#7c5e5a]">Last updated: {LAST_UPDATED}</p>
      </header>

      <section className="bg-[#fff9fb] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">1. what we collect</h2>
        <p>
          doodleduo uses Apple Sign-In to create your account. We collect only your email address and display name. All
          doodles, activities, and messages are stored securely and visible only to you and your partner inside your duo room.
        </p>
        <p className="font-semibold">Information we collect:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Email address (via Apple Sign-In)</li>
          <li>Display name and optional profile photo</li>
          <li>Doodles, drawings, voice messages, and text notes you create</li>
          <li>Activity metadata (timestamps, love points, streak data)</li>
          <li>Push notification tokens (to send alerts when your partner shares something)</li>
          <li>Anniversary date (if you choose to set one)</li>
        </ul>
      </section>

      <section className="bg-[#fffaf5] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">2. how we use your info</h2>
        <p>
          Your data powers the shared experience: syncing doodles, tracking streaks, sending push notifications when your
          partner sends something cozy. We never sell or share your data with advertisers or third parties.
        </p>
        <p className="font-semibold">We use your information to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Create and maintain your duo room with your partner</li>
          <li>Sync activities in real-time between both partners</li>
          <li>Send push notifications for new doodles, messages, and interactions</li>
          <li>Calculate relationship stats (days together, love points, streaks)</li>
          <li>Process subscription payments via Apple&apos;s In-App Purchase system</li>
          <li>Provide customer support when you contact us</li>
        </ul>
      </section>

      <section className="bg-[#f6fbff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">3. data security</h2>
        <p>
          We use industry-standard encryption and secure storage (Supabase) to protect your account and content. Only
          authenticated users can access their own duo room.
        </p>
        <p className="font-semibold">Security measures include:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Encryption in transit (HTTPS/TLS) for all data transfers</li>
          <li>Row-level security policies ensuring only duo members can access their room</li>
          <li>Secure authentication via Apple Sign-In (no passwords stored)</li>
          <li>Regular security updates and monitoring</li>
        </ul>
      </section>

      <section className="bg-[#fff5ff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">4. data retention</h2>
        <p>
          We keep your data as long as your account is active. When you delete your duo room or account, all associated
          content (doodles, messages, activities) is permanently deleted from our servers within 30 days.
        </p>
        <p>
          Subscription records are retained as required by Apple and tax regulations, but these contain only transaction
          metadata (no personal content).
        </p>
      </section>

      <section className="bg-[#fef9f0] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">5. your rights (GDPR/CCPA)</h2>
        <p>
          You have the right to access, correct, or delete your personal data at any time. You can also request a copy of
          your data or restrict how we use it.
        </p>
        <p className="font-semibold">Your rights include:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Access:</strong> Request a copy of all data we store about you</li>
          <li><strong>Correction:</strong> Update your display name or profile photo in-app</li>
          <li><strong>Deletion:</strong> Delete your duo room or account via app settings</li>
          <li><strong>Portability:</strong> Export your doodles and messages (contact support)</li>
          <li><strong>Opt-out:</strong> Disable push notifications in iOS Settings</li>
        </ul>
        <p>
          To exercise these rights, email us at{' '}
          <Link href="mailto:anthonyverruijtx@hotmail.com" className="text-[#ad75ba] underline">
            anthonyverruijtx@hotmail.com
          </Link>.
        </p>
      </section>

      <section className="bg-[#fff9fb] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">6. third-party services</h2>
        <p>
          doodleduo uses the following third-party services to provide functionality:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Apple Sign-In:</strong> Authentication (governed by Apple&apos;s privacy policy)</li>
          <li><strong>Supabase:</strong> Database and storage (SOC 2 Type II compliant, GDPR-ready)</li>
          <li><strong>Apple Push Notification Service (APNs):</strong> Push notifications</li>
          <li><strong>Apple In-App Purchase:</strong> Subscription billing</li>
        </ul>
        <p>
          These services have their own privacy policies and are chosen for their strong security practices. We do not share
          your data with any other third parties.
        </p>
      </section>

      <section className="bg-[#fffaf5] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">7. children&apos;s privacy</h2>
        <p>
          doodleduo is designed for adults aged 18 and older. We do not knowingly collect information from children under 18.
          If we discover that a child has provided us with personal information, we will delete it immediately.
        </p>
      </section>

      <section className="bg-[#f6fbff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">8. cookies & tracking</h2>
        <p>
          The doodleduo iOS app does not use cookies or third-party tracking. Our website ({SITE_URL}) uses minimal
          analytics to understand visitor traffic, but does not track individual users or use advertising cookies.
        </p>
      </section>

      <section className="bg-[#fff5ff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">9. international transfers</h2>
        <p>
          Your data is stored on Supabase servers, which may be located outside your country of residence. By using
          doodleduo, you consent to the transfer of your data to these servers. Supabase complies with GDPR and uses
          standard contractual clauses for international data transfers.
        </p>
      </section>

      <section className="bg-[#fef9f0] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">10. changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time. When we do, we&apos;ll update the &quot;Last updated&quot; date at
          the top of this page. Significant changes will be announced in-app or via email. Your continued use of doodleduo
          after changes means you accept the updated policy.
        </p>
      </section>

      <section className="bg-[#fff9fb] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">11. contact us</h2>
        <p>
          Questions or concerns about your privacy? Want to exercise your data rights? Reach out at{' '}
          <Link href="mailto:anthonyverruijtx@hotmail.com" className="text-[#ad75ba] underline">
            anthonyverruijtx@hotmail.com
          </Link>{' '}
          or visit {SITE_URL}.
        </p>
      </section>
    </main>
  )
}
