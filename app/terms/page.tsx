import Link from 'next/link'

const LAST_UPDATED = 'November 26, 2025'
const SITE_URL = 'https://doodleduoapp.com'

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-[#3a2c2b]">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.4em] text-[#ad75ba]">terms of service</p>
        <h1 className="text-4xl font-black lowercase">doodleduo rules for cozy play</h1>
        <p className="text-sm text-[#7c5e5a]">Last updated: {LAST_UPDATED}</p>
      </header>

      <section className="bg-[#fff9fb] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">1. eligibility</h2>
        <p>
          doodleduo is designed for adults who want to nurture a relationship in a safe space. By using the app you
          confirm you are at least 18 years old and legally allowed to form a binding agreement in your region.
        </p>
      </section>

      <section className="bg-[#fffaf5] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">2. account + duo rooms</h2>
        <p>
          Every account is tied to an email address. Inviting a partner creates a shared duo room where both of you can
          post content. Please only add people you trust—anything you create is visible to your partner.
        </p>
        <p className="font-semibold mt-4">Account responsibilities:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>You are responsible for maintaining the security of your Apple Sign-In credentials</li>
          <li>You must not share your account or room code publicly</li>
          <li>You agree to notify us immediately if you suspect unauthorized access</li>
        </ul>
      </section>

      <section className="bg-[#f6fbff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">3. subscriptions</h2>
        <p>
          doodleduo Pro is billed through Apple using auto-renewing subscriptions (monthly or yearly). Payment is charged
          to your Apple ID and renews until canceled at least 24 hours before the current period ends. You can
          manage or cancel from <strong>Settings → Apple ID → Subscriptions</strong>. No refunds are handled by doodleduo directly.
        </p>
        <p className="font-semibold mt-4">Important subscription details:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Individual subscriptions required:</strong> Each partner needs their own active subscription to continue using premium features after the free trial period</li>
          <li><strong>Free trial:</strong> New users get 1 day of free access to test premium features</li>
          <li><strong>Auto-renewal:</strong> Subscriptions automatically renew unless canceled 24+ hours before the period ends</li>
          <li><strong>No refunds:</strong> All sales are final per Apple&apos;s policies. Cancel anytime to prevent future charges</li>
          <li><strong>Pricing:</strong> Prices displayed in the app are in your local currency via Apple&apos;s App Store</li>
        </ul>
      </section>

      <section className="bg-[#fff5ff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">4. acceptable use</h2>
        <p>
          Keep doodleduo respectful—no harassment, spam, or illegal content. We may suspend accounts that violate these
          guidelines or Apple&apos;s platform rules.
        </p>
        <p className="font-semibold mt-4">Prohibited activities:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Uploading content that is illegal, harmful, threatening, abusive, or offensive</li>
          <li>Impersonating others or creating fake accounts</li>
          <li>Using the app to harass, stalk, or intimidate your partner or others</li>
          <li>Attempting to reverse engineer, hack, or exploit the app</li>
          <li>Sharing explicit content without consent</li>
          <li>Using automated tools or bots to interact with the service</li>
        </ul>
      </section>

      <section className="bg-[#fef9f0] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">5. content ownership</h2>
        <p>
          You retain all rights to the doodles, messages, and content you create in doodleduo. By using the app, you grant
          us a limited license to store and display your content to your partner within your duo room.
        </p>
        <p>
          We do not claim ownership of your content and will not use it for any purpose other than providing the service.
          You are responsible for ensuring you have the right to upload any content (photos, audio, etc.).
        </p>
      </section>

      <section className="bg-[#fff9fb] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">6. termination</h2>
        <p>
          You can delete your duo room or account at any time via the app or by emailing us. We reserve the right to
          terminate or limit access if necessary to protect users or comply with law.
        </p>
        <p className="font-semibold mt-4">Account deletion:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Deleting your account removes all your content permanently within 30 days</li>
          <li>Your partner will be notified if you delete your duo room</li>
          <li>Active subscriptions must be canceled separately via Apple&apos;s App Store</li>
        </ul>
      </section>

      <section className="bg-[#fffaf5] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">7. disclaimer of warranties</h2>
        <p>
          doodleduo is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the app will be
          error-free, secure, or always available. We are not responsible for data loss due to technical issues, though we
          take reasonable precautions to prevent it.
        </p>
        <p>
          You use the app at your own risk. We recommend backing up important doodles by saving them to your device.
        </p>
      </section>

      <section className="bg-[#f6fbff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">8. limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, doodleduo and its developers are not liable for any indirect, incidental,
          special, or consequential damages arising from your use of the app. This includes but is not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Loss of data or content</li>
          <li>Relationship issues arising from app use</li>
          <li>Unauthorized access to your account</li>
          <li>Service interruptions or technical failures</li>
        </ul>
        <p>
          Our total liability for any claim related to the app is limited to the amount you paid for subscriptions in the
          past 12 months.
        </p>
      </section>

      <section className="bg-[#fff5ff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">9. indemnification</h2>
        <p>
          You agree to indemnify and hold doodleduo harmless from any claims, damages, or expenses (including legal fees)
          arising from:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Your violation of these terms</li>
          <li>Your content or conduct in the app</li>
          <li>Your violation of any rights of another person or entity</li>
        </ul>
      </section>

      <section className="bg-[#fef9f0] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">10. governing law</h2>
        <p>
          These terms are governed by the laws of the Netherlands. Any disputes arising from these terms or your use of
          doodleduo will be resolved in the courts of the Netherlands.
        </p>
        <p>
          If you are a consumer in the EU, you also have rights under EU consumer protection laws.
        </p>
      </section>

      <section className="bg-[#fff9fb] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">11. dispute resolution</h2>
        <p>
          If you have a complaint or dispute, please contact us first at{' '}
          <Link href="mailto:anthonyverruijtx@hotmail.com" className="text-[#ad75ba] underline">
            anthonyverruijtx@hotmail.com
          </Link>. We&apos;ll do our best to resolve the issue amicably before any legal action.
        </p>
      </section>

      <section className="bg-[#fffaf5] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">12. severability</h2>
        <p>
          If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue
          in full force and effect.
        </p>
      </section>

      <section className="bg-[#f6fbff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">13. changes to these terms</h2>
        <p>
          We may update these terms from time to time. When we do, we&apos;ll update the &quot;Last updated&quot; date at the top
          of this page. Significant changes will be announced in-app or via email. Your continued use of doodleduo after
          changes means you accept the updated terms.
        </p>
      </section>

      <section className="bg-[#fff5ff] rounded-3xl p-6 space-y-4 shadow-sm">
        <h2 className="text-2xl font-semibold lowercase">14. contact</h2>
        <p>
          Questions about these terms or billing? Email{' '}
          <Link href="mailto:anthonyverruijtx@hotmail.com" className="text-[#ad75ba] underline">
            anthonyverruijtx@hotmail.com
          </Link>{' '}
          or visit {SITE_URL}.
        </p>
      </section>
    </main>
  )
}
