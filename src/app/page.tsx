"use client"
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Header from "@/components/Header";
import Alert from "@/components/Alert";
import FilterGroup from "@/components/FilterGroup";
import SearchBar from "@/components/SearchBar";
import PerformanceWidget from "@/components/PerformanceWidget";
import PerformanceTable from "@/components/PerformanceTable";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import { performanceScoreMockList, UserMiseryMockList } from "@/components/PerformanceWidget/mockData";
import PieChartMock from "@/components/PerformanceWidget/PieChartMock";
import LineChartMock from "@/components/PerformanceWidget/LineChartMock";
export default function Home() {
  const [performanceScoreList, setPerformanceScoreList] = useState(performanceScoreMockList)
  const [userMiseryList, setUserMiseryList] = useState(UserMiseryMockList)
  const [title_1, setTitle_1] = useState("Performance Score")
  const [title_2, setTitle_2] = useState("Most Time-Consuming Queries")
  const [title_3, setTitle_3] = useState("User Misery")
  const [title_4, setTitle_4] = useState("Most Time-Consuming Queries")
  const [title_5, setTitle_5] = useState("Most Time-Consuming Queries")



  return (
    <PageLayout>
      <Header />
      <main className="flex flex-col flex-1">
        <div className="p-[16px] m-0 bg-white flex-grow rounded-[6px] min-w-[500px]  md:px-[30px] md:py-[20px]">
          <Alert />
          <div className="grid grid-rows-[auto_auto] gap-[16px] mb-[16px] sm:grid-cols-[auto_1fr] sm:grid-rows-[auto]">
            <FilterGroup />
            <SearchBar />
          </div>
          <div className="grid grid-cols-[1fr] gap-[16px] mb-[16px] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            <PerformanceWidget
              title={title_1}
              isNew={true}
              showViewAll={true}
              chartNode={<PieChartMock />}
              popoverContentList={performanceScoreList}
              onDateChange={(val) => {
                setTitle_1(val.name)
                setPerformanceScoreList(performanceScoreMockList.map((item) => ({ ...item, checked: item.name === val.name ? !item.checked : false })))
              }}
              desc="The overall performance score across selected frontend projects only"
            />
            <PerformanceWidget
              title={title_2}
              isNew={false}
              showViewAll={true}
              chartNode={<LineChartMock />}
              popoverContentList={performanceScoreList}
              onDateChange={(val) => {
                setTitle_2(val.name)
                setPerformanceScoreList(performanceScoreMockList.map((item) => ({ ...item, checked: item.name === val.name ? !item.checked : false })))
              }}
              desc="Top queries by total duration"
            />
          </div>
          <div className="grid grid-cols-[1fr] gap-[16px] mb-[16px] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            <PerformanceWidget
              title={title_3}
              isNew={false}
              showViewAll={false}
              chartValue={'111'}
              chartNode={<LineChartMock />}
              popoverContentList={userMiseryList}
              onDateChange={(val) => {
                setTitle_3(val.name)
                setUserMiseryList(UserMiseryMockList.map((item) => ({ ...item, checked: item.name === val.name ? !item.checked : false })))
              }}
              desc="Compared to last 90d"
            />
            <PerformanceWidget
              title={title_4}
              isNew={false}
              showViewAll={false}
              chartValue={'111'}
              chartNode={<LineChartMock />}
              popoverContentList={userMiseryList}
              onDateChange={(val) => {
                setTitle_4(val.name)
                setUserMiseryList(UserMiseryMockList.map((item) => ({ ...item, checked: item.name === val.name ? !item.checked : false })))
              }}
              desc="Compared to last 90d"
            />
            <PerformanceWidget
              title={title_5}
              isNew={false}
              showViewAll={false}
              chartValue={'111'}
              chartNode={<LineChartMock />}
              popoverContentList={userMiseryList}
              onDateChange={(val) => {
                setTitle_5(val.name)
                setUserMiseryList(UserMiseryMockList.map((item) => ({ ...item, checked: item.name === val.name ? !item.checked : false })))
              }}
              desc="Compared to last 90d"
            />
          </div>
          <div className="flex flex-col text-center">
            <PerformanceTable />
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
