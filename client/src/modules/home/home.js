import React from "react";
import SalesChart from "./SalesChart";

const Home = () => {
  const chartData = {
    labels: ["Today", "Yesterday", "Last 3 Days"],
    data: [300, 400, 500],
    totalPurchaseDue: 307144,
    totalSalesDue: 4385,
    totalSaleAmount: 385656.5,
    totalExpenseAmount: 40000,
  };

  // Define widget data
  const widgetData = [
    {
      title: "Total Purchase Due",
      value: chartData.totalPurchaseDue,
      icon: "/assets/img/icons/dash1.svg",
      backgroundColor: "rgba(249, 110, 111, 0.12)",
    },
    {
      title: "Total Sales Due",
      value: chartData.totalSalesDue,
      icon: "/assets/img/icons/dash2.svg",
      backgroundColor: "rgba(40, 199, 111, 0.12)",
    },
    {
      title: "Total Sale Amount",
      value: chartData.totalSaleAmount,
      icon: "/assets/img/icons/dash3.svg",
      backgroundColor: "rgba(0, 207, 232, 0.12)",
    },
    {
      title: "Total Expense Amount",
      value: chartData.totalExpenseAmount,
      icon: "/assets/img/icons/dash4.svg",
      backgroundColor: "rgba(234, 84, 85, 0.12)",
    },
  ];
  // Define count data
  const countData = [
    {
      value: 100,
      title: "Customers",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-user"
        >
          <g>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </g>
        </svg>
      ),
      backgroundColor: "#00cfe8",
    },
    {
      value: 110,
      title: "Suppliers",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-user-check"
        >
          <g>
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <polyline points="17 11 19 13 23 9"></polyline>
          </g>
        </svg>
      ),
      backgroundColor: "#1b2850",
    },
    {
      value: 150,
      title: "Purchase Invoice",
      icon: (
        <img
          className="img-fluid"
          src="/assets/img/icons/file-text-icon-01.svg"
          alt="icon"
        />
      ),
      backgroundColor: "#28c76f",
    },
    {
      value: 170,
      title: "Sales Invoice",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-file"
        >
          <g>
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </g>
        </svg>
      ),
      backgroundColor: "#ffab00", // Example color for Sales Invoice
    },
  ];

  return (
    <div className="dashboard" style={{ height: "100%", overflowY: "auto" }}>
      <div className="content">
        <div className="row">
          {widgetData.map((widget, index) => (
            <div key={index} className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-widget w-100">
                <div className="dash-widgetimg">
                  <span style={{ background: widget.backgroundColor }}>
                    <img alt="" src={widget.icon} />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    <span>${widget.value.toLocaleString()}</span>
                  </h5>
                  <h6>{widget.title}</h6>
                </div>
              </div>
            </div>
          ))}
          {countData.map((count, index) => (
            <div key={index} className="col-xl-3 col-sm-6 col-12 d-flex">
              <div
                className="dash-count"
                style={{ backgroundColor: count.backgroundColor }}
              >
                <div className="dash-counts">
                  <h4>{count.value}</h4>
                  <h5>{count.title}</h5>
                </div>
                <div className="dash-imgs">{count.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-xl-7 col-sm-12 col-12 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Purchase & Sales</h5>
                <div className="graph-sets">
                  <ul class="mb-0">
                    <li>
                      <span>Sales</span>
                    </li>
                    <li>
                      <span>Purchase</span>
                    </li>
                  </ul>
                  <div class="dropdown dropdown-wraper">
                    <button
                      class="btn btn-light btn-sm dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      2023
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a class="dropdown-item" href="/">
                          2023
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          2022
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          2021
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <SalesChart chartData={chartData} />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-sm-12 col-12 d-flex">
            <div className="card flex-fill default-cover mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 class="card-title mb-0">Recent Products</h4>
                <div class="view-all-link">
                  <a class="view-all d-flex align-items-center" href="/">
                    View All
                    <span class="ps-2 d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather-16"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive dataview">
                  <table className="table dashboard-recent-products">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Products</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td class="productimgname">
                          <a class="product-img" href="/product-list">
                            <img
                              src="/assets/img/products/stock-img-01.png"
                              alt=""
                            />
                          </a>
                          <a href="/product-list">Lenevo 3rd Generation</a>
                        </td>
                        <td>$12500</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td class="productimgname">
                          <a class="product-img" href="/product-list">
                            <img
                              src="/assets/img/products/stock-img-06.png"
                              alt="product"
                            />
                          </a>
                          <a href="/product-list">Bold V3.2</a>
                        </td>
                        <td>$1600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
