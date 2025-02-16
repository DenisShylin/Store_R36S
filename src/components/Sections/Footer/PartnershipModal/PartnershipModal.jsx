import { X } from "lucide-react";
import "./PartnershipModal.css";

const PartnershipModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`partnership-modal-overlay ${isOpen ? "active" : ""}`}>
      <div className={`partnership-modal-content ${isOpen ? "active" : ""}`}>
        <button className="partnership-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <h2 className="partnership-modal-title">Partnership with R36S</h2>

        <h2 className="partnership-modal-title">COMPANY INFORMATION</h2>

        <div className="partnership-section">
          <p className="partnership-text">
            <strong>R36S brand was founded</strong> on February 28,{" "}
            <strong>2007</strong> in Zhejiang Province, China.
          </p>
          <p className="partnership-text">
            <strong>The company employs</strong> 11-50 people.
          </p>
          <p className="partnership-text">
            <strong>Main products:</strong> handheld consoles, TV game consoles,
            game controllers.
          </p>
          <p className="partnership-text">
            <strong>The company`s annual revenue:</strong> 50-100 million US
            dollars.
          </p>
          <p className="partnership-text">
            <strong>R36S markets:</strong> Western Europe 11% East Asia 11%
            Middle East 11%
          </p>
        </div>

        <div className="partnership-section">
          <h3 className="partnership-section-title-2">R36S Wholesale Trade</h3>
          <p className="partnership-text">
            Wholesale prices, representative office registration and
            distribution:
            <a
              href="https://www.alibaba.com/product-detail/R36S-Retro-3-5-Inch-IPS_1600984248000.html"
              className="partnership-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              www.R36S.ali.com
            </a>
          </p>
        </div>

        <div className="partnership-section">
          <h3 className="partnership-section-title">
            Introduction to R36S Retro Handheld Game Console
          </h3>
          <p className="partnership-text">
            The R36S distributor network actively expands worldwide, bringing
            nostalgic gaming experiences to enthusiasts everywhere. Initially,
            the R36S headquarters established its presence in Asia, but now the
            brand confidently moves into international markets. Moreover, the
            company welcomes new partnerships across different continents,
            making the R36S Retro Handheld Game Console increasingly accessible
            to global consumers. Furthermore, the brand`s commitment to quality
            and affordability has positioned it as a strong competitor in the
            retro gaming market.
          </p>
        </div>

        <div className="partnership-section">
          <h3 className="partnership-section-title">
            Global Distribution Opportunities
          </h3>
          <p className="partnership-text">
            As an exclusive distributor for R36S, you can tap into emerging
            markets across North America, Europe, and Australia. Meanwhile, the
            R36S dealer network continues to grow in South America and Africa.
            Subsequently, the brand`s presence strengthens in key markets like
            the United Kingdom, Germany, France, and Spain. Additionally, R36S
            has successfully penetrated markets in Canada, Mexico, and Brazil.
            Therefore, potential partners can explore various territories with
            significant growth potential.
          </p>
        </div>

        <div className="partnership-section">
          <h3 className="partnership-section-title">
            Partnership Benefits and Support
          </h3>
          <p className="partnership-text">
            Collaboration with R36S offers comprehensive support for new
            distributors and dealers. First, the R36S contact number connects
            partners directly with dedicated support teams. Then, partners
            receive extensive training and marketing materials. Consequently,
            this enables smooth market entry and operation. Besides, the company
            provides competitive pricing structures and flexible minimum order
            quantities. Hence, partners can effectively manage inventory and
            maximize profitability.
          </p>
        </div>

        <div className="partnership-section">
          <h3 className="partnership-section-title">
            E-commerce and Marketplace Integration
          </h3>
          <p className="partnership-text">
            The R36S distributor network thrives on major e-commerce platforms
            worldwide. Currently, partners successfully sell through Amazon,
            eBay, and regional marketplaces. Similarly, many dealers operate
            dedicated online stores featuring R36S products. Nevertheless, the
            brand maintains strict quality control and pricing policies. Thus,
            partners can maintain healthy profit margins while ensuring customer
            satisfaction.
          </p>
        </div>

        <div className="partnership-section">
          <h3 className="partnership-section-title">
            Regional Market Strategies
          </h3>
          <p className="partnership-text">
            An exclusive distributor can develop tailored strategies for
            specific regions. Meanwhile, the R36S headquarters provides market
            insights and trend analysis. Particularly, the brand excels in
            adapting to local gaming preferences and retail environments.
            Indeed, successful partnerships have emerged in diverse markets from
            Singapore to Sweden. Afterward, partners can expand their territory
            based on performance and market demand.
          </p>
        </div>

        <div className="partnership-section">
          <h3 className="partnership-section-title">
            Future Growth and Development
          </h3>
          <p className="partnership-text">
            Cooperation with R36S opens doors to long-term business growth.
            Presently, the brand develops new product lines and gaming features.
            In addition, R36S dealers benefit from regular product updates and
            innovations. Furthermore, the R36S contact number facilitates
            ongoing communication and support. Finally, partners join a global
            network of successful gaming retailers and distributors. Yet, the
            brand maintains its commitment to quality and customer satisfaction
            across all markets.
          </p>
        </div>

        <div className="footer__copyright">
          <a href="/">© 2025 R36S. All rights reserved.</a>
        </div>
      </div>
    </div>
  );
};

export default PartnershipModal;
