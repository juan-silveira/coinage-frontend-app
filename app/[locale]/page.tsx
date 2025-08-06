'use client';

import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from "lucide-react";
import DashboardDropdown from "@/components/dashboard-dropdown";
import RevenueBarChart from "@/components/revenue-bar-chart";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import LayoutProvider from "@/providers/layout.provider";
import LayoutContentProvider from "@/providers/content.provider";
import DashCodeSidebar from "@/components/partials/sidebar";
import DashCodeFooter from "@/components/partials/footer";
import ThemeCustomize from "@/components/partials/customizer";
import DashCodeHeader from "@/components/partials/header";

const AnalyticsDashboard = () => {
  const t = useTranslations("AnalyticsDashboard");

  // Dados mockados para o dashboard original
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Subscriptions",
      value: "+2350",
      change: "+180.1%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19%",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+201",
      trend: "up",
      icon: Activity,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "John Doe",
      action: "Purchased a new item",
      amount: "$299.00",
      time: "2 minutes ago",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "Subscribed to premium plan",
      amount: "$99.00",
      time: "5 minutes ago",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "Cancelled subscription",
      amount: "-$49.00",
      time: "10 minutes ago",
      avatar: "/api/placeholder/32/32",
    },
  ];

  const companies = [
    {
      id: 1,
      name: "Acme Corp",
      revenue: "$1,200,000",
      growth: "+12%",
      status: "active",
    },
    {
      id: 2,
      name: "TechStart Inc",
      revenue: "$850,000",
      growth: "+8%",
      status: "active",
    },
    {
      id: 3,
      name: "Global Solutions",
      revenue: "$2,100,000",
      growth: "+15%",
      status: "active",
    },
  ];

  return (
    <ProtectedRoute>
      <LayoutProvider>
        <ThemeCustomize />
        <DashCodeHeader />
        <DashCodeSidebar />
        <LayoutContentProvider>
          <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>
                    {stat.change}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("revenue_chart_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <RevenueBarChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                    <div className="text-sm font-medium">{activity.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Companies Table */}
        <Card>
          <CardHeader>
            <CardTitle>{t("company_table_title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Growth</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell>{company.revenue}</TableCell>
                    <TableCell>
                      <span className="text-green-600">{company.growth}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{company.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
                     </CardContent>
         </Card>
       </div>
         </LayoutContentProvider>
         <DashCodeFooter />
       </LayoutProvider>
     </ProtectedRoute>
   );
 };

export default AnalyticsDashboard; 