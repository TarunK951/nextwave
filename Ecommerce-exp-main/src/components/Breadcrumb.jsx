import React from "react";

const Breadcrumb = () => (
  <>
    <style>{`
      .breadcrumb-mobile {
        display: none;
      }
      @media screen and (max-width: 768px) {
        .breadcrumb-mobile {
          display: flex;
          padding: 10px 20px;
          font-size: 12px;
          font-weight: 500;
          color: #333;
          gap: 5px;
        }
        .breadcrumb-mobile .home {
          color: #bbb;
        }
        .breadcrumb-mobile .separator {
          color: #ccc;
        }
        .breadcrumb-mobile .shop {
          font-weight: bold;
          color: #000;
        }
      }
    `}</style>

    <div className="breadcrumb-mobile">
      <span className="home">HOME</span>
      <span className="separator">|</span>
      <span className="shop">SHOP</span>
    </div>
  </>
);

export default Breadcrumb;
