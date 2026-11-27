import Header from '../common/Header'
import Footer from '../common/Footer'

const supportTopics = [
  {
    label: 'Product questions',
    description: 'Ask about sizing, materials, or product availability.',
  },
  {
    label: 'Order assistance',
    description: 'Get help with an order or delivery details.',
  },
  {
    label: 'Returns and exchanges',
    description: 'Tell us what you need help with after your purchase.',
  },
]

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-stone-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              We are here to help
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact us
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Have a question about a product or your order? Get in touch and
              our team will be happy to help.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 lg:grid-cols-[0.8fr_1.2fr]">
            <section className="bg-gray-900 px-6 py-10 text-white sm:px-10">
              <h2 className="text-2xl font-semibold">How can we help?</h2>
              <p className="mt-3 leading-7 text-gray-300">
                Send us a message about any of the following topics.
              </p>

              <dl className="mt-10 space-y-7">
                {supportTopics.map(({ label, description }) => (
                  <div key={label}>
                    <dt className="font-medium text-white">{label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-300">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="px-6 py-10 sm:px-10">
              <h2 className="text-2xl font-semibold text-gray-900">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Fill out the form below and we’ll be in touch.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-700"
                      htmlFor="contact-name"
                    >
                      Your name
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                      id="contact-name"
                      name="name"
                      placeholder="Jane Smith"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-700"
                      htmlFor="contact-email"
                    >
                      Email address
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                      id="contact-email"
                      name="email"
                      placeholder="jane@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-gray-700"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                    id="contact-subject"
                    name="subject"
                    placeholder="How can we help?"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-gray-700"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                    id="contact-message"
                    name="message"
                    placeholder="Write your message..."
                    rows={5}
                  />
                </div>
                <button
                  className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-gray-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
                  type="button"
                >
                  Send message
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}