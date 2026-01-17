import PromiseCard from "../PromiseCard/PromiseCard";

const LuxaristPromises = () => {

    const promises = [
       { icon: "✂️", title: "Handcrafted Excellence", text: "Each piece is meticulously crafted by master artisans with decades of experience in fine jewelry making."},
       {icon: "♾️", title: "Lifetime Guarantee", text: "We stand behind our craftsmanship with a comprehensive lifetime warranty on all our jewelry pieces."},
       {icon: "✈", title: "Complimentary Shipping", text: "Enjoy free expedited shipping on all orders, with secure packing and full insurance coverage."},
       {icon: "✅", title: "Certified Authority", text: "Every piece comes with a certificate of authenticity, ensuring genuine materials and ethical sourcing."},
    ];
    return (
           <section className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {promises.map((promise, i) => (
                    <PromiseCard key={i} {...promise} />
                ))}
            </div>
           </section>
    )
}

export default LuxaristPromises;