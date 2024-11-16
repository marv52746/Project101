// Home.js
import React, { useState } from "react";
import SalesChart from "./SalesChart";
import CountUp from "react-countup";

const Home = () => {
  const generateDailyData = () => {
    const data = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const label = date.toISOString().split("T")[0];
      data.push({
        label,
        sales: Math.floor(Math.random() * 1000 + 500), // Random sales data
        purchase: Math.floor(Math.random() * 800 + 200), // Random purchase data
      });
    }
    return data.reverse(); // Reverse to have the latest date first
  };

  const generateMonthlyData = () => {
    const data = [];
    const year = new Date().getFullYear();
    for (let i = 0; i < 12; i++) {
      const month = new Date(year, i);
      const label = month.toLocaleString("default", { month: "long" });
      data.push({
        label,
        sales: Math.floor(Math.random() * 10000 + 2000), // Random sales data
        purchase: Math.floor(Math.random() * 8000 + 1000), // Random purchase data
      });
    }
    return data;
  };

  const DATA_SETS = {
    daily: generateDailyData(),
    weekly: [
      { label: "Week 1", sales: 2500, purchase: 1500 },
      { label: "Week 2", sales: 2800, purchase: 1600 },
      { label: "Week 3", sales: 3000, purchase: 1700 },
      { label: "Week 4", sales: 3200, purchase: 1800 },
    ],
    monthly: generateMonthlyData(),
    yearly: [
      { label: "2021", sales: 50000, purchase: 20000 },
      { label: "2022", sales: 60000, purchase: 25000 },
      { label: "2023", sales: 70000, purchase: 30000 },
    ],
    allTime: [{ label: "All Time", sales: 200000, purchase: 100000 }],
  };

  const [timeFrame, setTimeFrame] = useState("monthly");

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  const chartData = {
    labels: DATA_SETS[timeFrame].map((item) => item.label),
    data: [
      DATA_SETS[timeFrame].map((item) => item.sales),
      DATA_SETS[timeFrame].map((item) => item.purchase),
    ],
    totalPurchaseDue: 307144,
    totalSalesDue: 4385,
    totalSaleAmount: 385656.5,
    totalExpenseAmount: 40000,
    customers: 100,
    suppliers: 110,
    purchaseInvoice: 150,
    salesInvoice: 170,
  };

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

  const countData = [
    {
      value: chartData.customers,
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
      value: chartData.suppliers,
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
      value: chartData.purchaseInvoice,
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
      value: chartData.salesInvoice,
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
      backgroundColor: "#ffab00",
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
                    <CountUp
                      start={0}
                      end={widget.value}
                      duration={5}
                      prefix="$"
                    />
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
                  <select
                    value={timeFrame}
                    onChange={handleTimeFrameChange}
                    className="form-select"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                    <option value="allTime">All Time</option>
                  </select>
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
                <h4 className="card-title mb-0">Recent Products</h4>
                <div className="view-all-link">
                  <a className="view-all d-flex align-items-center" href="/">
                    View All
                    <span className="ps-2 d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 8.3a.5.5 0 0 1 0 .6l-4 4a.5.5 0 0 1-.8-.6L9.5 8l-3.3-3.3a.5.5 0 1 1 .8-.6l4 4z"
                        />
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
                        <td className="productimgname">
                          <a className="product-img" href="/product-list">
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
                        <td className="productimgname">
                          <a className="product-img" href="/product-list">
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
                {/* Insert recent products here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
