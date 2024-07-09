import DashboardComponent from "@/components/dashboard/dashboard";
import Layout from "@/components/layout/layout";


export default function Dashboard  ()  {
    return (
        <Layout title={'Admin Dashboard'}>
            <DashboardComponent/>
        </Layout>
    )
}