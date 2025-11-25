import Link from 'next/link'

const LAST_UPDATED = 'November 25, 2025'
const SUPPORT_EMAIL = 'anthonyverruijtx@hotmail.com'

export default function SupportPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-[#3a2c2b]">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.4em] text-[#ad75ba]">support</p>
        <h1 className="text-4xl font-black lowercase">we&apos;re here to help</h1>
        <p className="text-sm text-[#7c5e5a]">Last updated: {LAST_UPDATED}</p>
      </header>

      <section className="bg-[#fff9fb] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">📧 contact us</h2>
        <p>
          Have a question, bug report, or feature request? We&apos;d love to hear from you!
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <Link href={`mailto:${SUPPORT_EMAIL}`} className="text-[#ad75ba] underline">
            {SUPPORT_EMAIL}
          </Link>
        </p>
        <p className="text-sm text-[#7c5e5a]">
          We typically respond within 24-48 hours. Please include your account email and a detailed description of your issue.
        </p>
      </section>

      <section className="bg-[#fffaf5] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">🔍 frequently asked questions</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">What information does doodleduo collect when I sign in with Apple?</h3>
            <p className="text-sm">
              When you sign in with Apple, we only receive the information you choose to share:
            </p>
            <ul className="text-sm list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Name:</strong> Used to display your identity to your partner</li>
              <li><strong>Email:</strong> Used only for account verification (we never send promotional emails)</li>
            </ul>
            <p className="text-sm mt-2">
              We respect Apple&apos;s privacy guidelines and never ask for information that&apos;s already provided through Sign in with Apple. Your data is private to you and your partner only.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">How do I invite my partner?</h3>
            <p className="text-sm">
              Go to Settings in the app and share your unique room code with your partner. They can enter it during their onboarding to join your duo space.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">How do I cancel my subscription?</h3>
            <p className="text-sm">
              Subscriptions are managed through Apple. Go to <strong>Settings → Apple ID → Subscriptions</strong> on your iPhone, select doodleduo Pro, and tap Cancel Subscription.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">How do I delete my account?</h3>
            <p className="text-sm">
              Open the doodleduo app, go to <strong>Settings → Account → Delete Account</strong>. This will permanently remove:
            </p>
            <ul className="text-sm list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Your profile and profile photo</li>
              <li>All doodles and messages</li>
              <li>Activity history and voice messages</li>
              <li>Farm progress and purchased animals</li>
              <li>Game history</li>
              <li>Your duo room (if you&apos;re the last member)</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Note:</strong> Account deletion is permanent and cannot be undone. You will need to create a new account to use doodleduo again.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">My partner isn&apos;t receiving notifications</h3>
            <p className="text-sm">
              Make sure notifications are enabled in <strong>iPhone Settings → doodleduo → Notifications</strong>. Both partners need to grant permission during onboarding.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Can I change my display name?</h3>
            <p className="text-sm">
              Yes! Go to <strong>Settings → Your Profile</strong> and tap <strong>&quot;Edit display name&quot;</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Is my data private?</h3>
            <p className="text-sm">
              Absolutely. Your doodles, messages, and activities are only visible to you and your partner. We never share your data with third parties. See our{' '}
              <Link href="/privacy" className="text-[#ad75ba] underline">
                Privacy Policy
              </Link>{' '}
              for details.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">I found a bug! How do I report it?</h3>
            <p className="text-sm">
              Email us at{' '}
              <Link href={`mailto:${SUPPORT_EMAIL}`} className="text-[#ad75ba] underline">
                {SUPPORT_EMAIL}
              </Link>{' '}
              with:
            </p>
            <ul className="text-sm list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Your device model and iOS version</li>
              <li>Steps to reproduce the issue</li>
              <li>Screenshots if possible</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f6fbff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">💡 feature requests</h2>
        <p>
          Have an idea to make doodleduo even cozier? We&apos;re always listening to our community. Send your suggestions to{' '}
          <Link href={`mailto:${SUPPORT_EMAIL}`} className="text-[#ad75ba] underline">
            {SUPPORT_EMAIL}
          </Link>
          .
        </p>
      </section>

      <section className="bg-[#fff5ff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">📚 resources</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/privacy" className="text-[#ad75ba] underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-[#ad75ba] underline">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#ad75ba] underline">
              Back to Home
            </Link>
          </li>
        </ul>
      </section>

      <section className="bg-[#fef9f0] rounded-3xl p-6 space-y-4 shadow-sm text-center">
        <p className="text-sm text-[#7c5e5a]">
          thank you for choosing doodleduo to nurture your relationship ✨
        </p>
      </section>
    </main>
  )
}
