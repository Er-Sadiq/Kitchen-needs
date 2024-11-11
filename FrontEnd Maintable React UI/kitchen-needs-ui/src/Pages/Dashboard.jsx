import React, { useState, useEffect } from 'react';
import { IoPieChart, IoPodiumSharp, IoTrendingUpSharp } from 'react-icons/io5';
import Table from '../Components/Table';
import LineChart from '../Components/LineChart';

function Dashboard() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDate(now.toLocaleDateString());
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ icon, title, value, valueUnit, extraInfo, bgColor = 'bg-slate-200', iconBg = 'bg-Accent' }) => (
    <div className={`h-28 ${bgColor} rounded-lg flex items-center shadow-lg p-4 w-11/12 overflow-hidden`}>
      <div className={`rounded-full h-12 w-12 flex items-center justify-center ${iconBg}`}>
        {icon}
      </div>
      <div className="pl-4">
        <span className="text-lg font-medium text-balance leading-6">{title}</span>
        <div className="flex items-center">
          <strong className="text-xl font-semibold">
            {value}
            {valueUnit && <span className="text-base">{valueUnit}</span>}
          </strong>
          {extraInfo && <span className="text-sm text-green-500 pl-2">{extraInfo}</span>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full p-4  text-fontColor bg-slate-100 ">
      <nav className="w-full h-16 bg-slate-200 mb-10 rounded-xl flex justify-between items-center px-4 sm:px-8 shadow-lg overflow-hidden">
        <div className="text-fontColor font-Poppins font-semibold text-2xl sm:text-3xl flex gap-1 sm:gap-2">
          <h1>
            <span className="text-Accent">K</span>itc<span className="text-Accent">h</span>en
          </h1>
          <h1>
            N<span className="text-Accent">ee</span>ds
          </h1>
        </div>
        <div className="flex items-center space-x-5 text-sm sm:text-lg">
          <div>Time: <span>{time}</span></div>
          <div>Date: <span>{date}</span></div>
        </div>
      </nav>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
        {/* Statistics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 lg:grid-cols-2 lg:row-span-2 justify-center items-center">
          <StatCard
            icon={<IoTrendingUpSharp className="text-2xl text-white" />}
            title="Milk Delivered/U"
            value="17"
            valueUnit="L"
          />
          <StatCard
            icon={<IoPieChart className="text-2xl text-white" />}
            title="No Region"
            value="23"
            extraInfo="+13"
            iconBg="bg-violet-800"
          />
          <StatCard
            icon={<IoPodiumSharp className="text-2xl text-white" />}
            title="Commission/L"
            value="43"
            valueUnit="ltr"
          />
          <StatCard
            icon={<IoTrendingUpSharp className="text-2xl text-white" />}
            title="Balance/U"
            value="235"
            valueUnit="₹"
            iconBg="bg-green-600"
          />
        </div>

        <div className="col-span-1 lg:col-span-1 bg-slate-200 rounded-lg flex items-center justify-center shadow-lg h-64 mt-4 md:mt-0 lg:mt-2">
          <LineChart />
        </div>
      </div>
      
        <Table />
    
    </div>
  );
}

export default Dashboard;
