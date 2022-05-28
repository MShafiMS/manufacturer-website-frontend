import React from 'react';
import Product from '../Product/Product';
import tools1 from '../../../Assets/Tools/tools1.jpg';
import tools2 from '../../../Assets/Tools/tools2.jpg';
import tools3 from '../../../Assets/Tools/tools3.jpg';

const Products = () => {
    const products = [
        {
            _id: 1,
            name: 'Electricians Screw Driver ',
            description: '',
            img: tools1
        },
        {
            _id: 2,
            name: 'Set Iron Jackly 31 In 1 Tool Kit',
            description: '',
            img: tools2
        },
        {
            _id: 3,
            name: 'Jhalani Hand Tools',
            description: '',
            img: tools3
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-5xl font-bold uppercase'>Our Products</h3>
                <h2 className='text-4xl'>Tools You Can Buy</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(service =><Product
                        key={service._id}
                        service={service}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;