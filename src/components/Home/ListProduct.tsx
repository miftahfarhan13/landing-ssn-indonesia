'use client';

import { useEffect, useState } from 'react';
import './listProduct.css';
import ProductItem from './ProductItem';
import { categories } from '../../data/category';
import AOS from 'aos';

export default function ListProduct({ lang }: { lang: string }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 40
      }}
    >
      <div className="tab-menu">
        {categories.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {lang === 'en' ? tab?.nameEn : tab?.nameId}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <div className="row" data-aos="fade-up">
          {categories[activeTab].products.map((product) => (
            <div className="col-sm-12 col-md-3">
              <ProductItem
                lang={lang}
                slug={product?.slug}
                image={
                  product?.imageUrl ? product?.imageUrl : '/images/img-1.jpg'
                }
                title={product?.name}
                latinName={product?.scientificName}
              ></ProductItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
