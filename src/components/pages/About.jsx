import Header from '../common/Header'
import Footer from '../common/Footer'

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Our story
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About HS Fashion Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We make it easier to find clothing that feels right for every
            celebration and every day in between.
          </p>

          <div className="mt-12 grid gap-8 border-t border-gray-200 pt-10 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">What we do</h2>
              <p className="mt-3 leading-7 text-gray-600">
                HS Fashion Hub brings together thoughtfully selected styles for
                men and women, from occasion wear to versatile wardrobe
                essentials. We focus on helping you discover pieces that suit
                your taste and your moment.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Our promise</h2>
              <p className="mt-3 leading-7 text-gray-600">
                Shopping should feel clear and welcoming. We aim to offer a
                considered collection, helpful service, and an enjoyable
                experience from browsing to choosing your next look.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
