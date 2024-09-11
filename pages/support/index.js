import DashboardComponent from "@/components/dashboard/dashboard";
import Layout from "@/components/layout/layout";
import SupportListPage from "@/components/support/SupportListPage";


export default function Notifications  ()  {
    return (
        <Layout title={'Support'}>
            <SupportListPage/>
        </Layout>
    )
}