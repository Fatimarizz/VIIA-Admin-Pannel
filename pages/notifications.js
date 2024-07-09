import DashboardComponent from "@/components/dashboard/dashboard";
import Layout from "@/components/layout/layout";
import NotificationPage from "@/components/notificationPage/NotificationPage";


export default function Notifications  ()  {
    return (
        <Layout title={'Notifications'}>
            <NotificationPage/>
        </Layout>
    )
}