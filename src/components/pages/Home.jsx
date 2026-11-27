
import { useState } from "react";
import { products } from "../common/products.jsx";
import { womenproducts } from "../../data/womenproducts.jsx";
import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="py-10">

                    {/* Men's Section */}

                    <h2 className="text-center font-bold text-4xl">
                        Celebration wear for Men
                    </h2>

                    <p className="text-center">
                        Welcome to HS Fashion Hub. We have a wide range of celebration wear for men. Our collection includes shirts, pants, and accessories. We have a wide range of colors and styles to choose from.
                    </p>

                    <div className="productSection mx-auto mt-8 grid max-w-screen-xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {products.map((obj) => (
                            <ProductCard
                                key={obj.id}
                                data={obj}
                            />
                        ))}

                    </div>

                    {/* Women's Section */}

                    <h2 className="text-center font-bold text-4xl mt-12">
                        Celebration wear for Women
                    </h2>

                    <p className="text-center">
                        Welcome to HS Fashion Hub. We have a wide range of celebration wear for women. Our collection includes dresses, tops, bottoms, and accessories. We have a wide range of colors and styles to choose from.
                    </p>

                    <div className="mx-auto mt-8 grid max-w-screen-xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {womenproducts.map((obj) => (
                            <ProductCard
                                key={obj.id}
                                data={obj}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}


function ProductCard({ data }) {
    const [imageFailed, setImageFailed] = useState(false);
    const price = data.price.endsWith("$")
        ? `$${data.price.slice(0, -1)}`
        : data.price;

    return (
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                {imageFailed ? (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-6 text-center text-sm font-medium text-gray-500">
                        Image unavailable
                    </div>
                ) : (
                    <img
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        src={data.image}
                        alt={data.name}
                        loading="lazy"
                        onError={() => setImageFailed(true)}
                    />
                )}
            </div>

            <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {data.brand}
                </p>
                <h3 className="mt-2 min-h-14 text-lg font-semibold text-gray-900">
                    {data.name}
                </h3>
                <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-xl font-bold text-gray-900">{price}</p>
                    <div className="flex flex-wrap justify-end gap-1.5" aria-label={`Available sizes: ${data.size}`}>
                        {data.size.split("/").map((size) => (
                            <span
                                key={size}
                                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}