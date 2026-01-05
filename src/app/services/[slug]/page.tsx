import React from "react";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/servicesData";
import {
  ServiceHero,
  ServiceDetails,
  TechStack,
  ProcessWorkflow,
  RelatedProjects,
  Benefits,
  FAQ,
  TeamList,
  RelatedBlogPosts,
} from "@/components/services/ServiceSections";
import LeadPopupWrapper from "@/components/services/LeadPopupWrapper"; // We need a client wrapper for the popup

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found - Phixels",
    };
  }

  return {
    title: `${service.title} | Phixels Services`,
    description: service.shortDescription,
  };
}

export default async function ServicePage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <LeadPopupWrapper serviceName={service.title}>
        <ServiceHero service={service} />
        <ServiceDetails service={service} />
        <Benefits service={service} />
        <TechStack service={service} />
        <ProcessWorkflow service={service} />
        <RelatedProjects service={service} />

        {/* Dynamic Extra Sections */}
        <TeamList />
        <FAQ service={service} />
        <RelatedBlogPosts />
      </LeadPopupWrapper>
    </main>
  );
}
