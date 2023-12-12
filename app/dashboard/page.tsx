// esta pagina se esta RENDERIZANDO en el SERVIDOR (por default nextjs renderiza en el servidor).
// Por lo cual, un componente que se renderiza en el servidor puede ser ASINCRONO. 

import { Suspense } from "react";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "../ui/skeletons";

export default async function DashboardPage () {

    const rest = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await rest.json();
    console.log('component DashboardPage : data', data);  

    // this part was move to RevenueChart component
    // const revenue = await fetchRevenue();
    // console.log('component DashboardPage : revenue', revenue); 
    // Por default NextJs los componentes son del servidor, por el cual
    // estos console solo se veran en el server, y NO en el browser.
    
    // const latestInvoices = await fetchLatestInvoices();
    // console.log('component DashboardPage : latesInvoices', latestInvoices);
    // -----------


    return (
        <main>
          <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
            {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
            {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
            {/* <Card
              title="Total Customers"
              value={numberOfCustomers}
              type="customers"
            /> */}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton />} >
                {/* <RevenueChart revenue={revenue}  /> */}
                <RevenueChart />
            </Suspense>

            <Suspense fallback={<LatestInvoicesSkeleton />} >
                {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
                <LatestInvoices />
            </Suspense>

          </div>
        </main>
      );
}