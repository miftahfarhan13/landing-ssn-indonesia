import { categories } from '../../data/category';
import { useEffect, useState } from 'react';
import './listProduct.css';
import ProductItem from './ProductItem';
import AOS from 'aos';

function ListProduct({ lang }: { lang: string }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
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
      {!isLoading && (
        <>
          <div className="tab-menu">
            {categories?.map((tab, index) => (
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
              {categories[activeTab]?.products?.map((product) => (
                <div className="col-sm-12 col-md-3">
                  <ProductItem
                    lang={lang}
                    slug={product?.slug}
                    image={
                      product?.imageUrl
                        ? product?.imageUrl
                        : '/images/img-1.jpg'
                    }
                    title={product?.name}
                    latinName={product?.scientificName}
                  ></ProductItem>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListProduct;
