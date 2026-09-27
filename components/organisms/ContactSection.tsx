"use client";

import { useState, type FormEvent } from "react";
import { BlueprintFrame } from "@/components/atoms/BlueprintFrame";
import { Button } from "@/components/atoms/Button";
import { Field } from "@/components/atoms/Field";
import { Input } from "@/components/atoms/Input";
import { Select } from "@/components/atoms/Select";
import { SectionKicker } from "@/components/atoms/SectionKicker";
import { Textarea } from "@/components/atoms/Textarea";
import { ContactInfoItem } from "@/components/molecules/ContactInfoItem";
import { SERVICES } from "@/data/services";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nCompany: ${f.get("company") || "-"}\nEmail: ${f.get(
      "email"
    )}\nService: ${f.get("service")}\n\n${f.get("message") || ""}`;
    window.location.href =
      "mailto:info@dawtechservices.com?subject=" +
      encodeURIComponent("Quote request — " + f.get("service")) +
      "&body=" +
      encodeURIComponent(body);
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-[72px] border-t border-ink/12">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-[clamp(72px,9vw,128px)] sm:px-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionKicker>Contact us</SectionKicker>
          <h2 className="font-heading font-semibold text-[clamp(34px,4.4vw,58px)] leading-none uppercase">
            Technical solutions you can trust
          </h2>
          <div className="mt-9 grid border-t border-ink/16">
            <ContactInfoItem
              label="Company"
              icon={
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="1" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
                </svg>
              }
            >
              Dar Alwahaj Technical Services LLC
              <br />
              Brand: DAW Tech Services
            </ContactInfoItem>
            <ContactInfoItem
              label="Location"
              icon={
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
              }
            >
              Alkhabeesi Building, Plot 128-246-18
              <br />
              Deira, Dubai, United Arab Emirates
            </ContactInfoItem>
            <ContactInfoItem
              label="Email"
              icon={
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <rect x={2} y={4} width={20} height={16} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
            >
              <a href="mailto:info@dawtechservices.com" className="inline-block">
                info@dawtechservices.com
              </a>
            </ContactInfoItem>
            <ContactInfoItem
              label="Website"
              icon={
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx={12} cy={12} r={10} />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              }
            >
              <a href="https://dawtechservices.com" className="inline-block">
                dawtechservices.com
              </a>
            </ContactInfoItem>
          </div>
        </div>

        <BlueprintFrame
          as="form"
          onSubmit={onSubmit}
          className="grid content-start gap-5 p-6 sm:grid-cols-2 sm:p-11"
        >
          <div className="sm:col-span-2">
            <h3 className="font-heading font-semibold text-[28px] leading-none uppercase">
              Request a quote
            </h3>
            <p className="mt-2.5 font-body font-normal text-[15px] leading-[1.5] text-ink/75">
              Tell us about your site and requirements.
            </p>
          </div>
          <Field label="Name">
            <Input name="name" required autoComplete="name" />
          </Field>
          <Field label="Company">
            <Input name="company" autoComplete="organization" />
          </Field>
          <Field label="Email">
            <Input type="email" name="email" required autoComplete="email" />
          </Field>
          <Field label="Service">
            <Select name="service">
              {SERVICES.map((s) => (
                <option key={s.id}>{s.name}</option>
              ))}
              <option>Integrated / multiple services</option>
            </Select>
          </Field>
          <Field label="Message" className="sm:col-span-2">
            <Textarea name="message" />
          </Field>
          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <Button type="submit">
              Send request
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
            {sent && (
              <span className="font-body font-medium text-[15px] leading-snug text-accent">
                Your email app has opened with the request — send it to reach our team.
              </span>
            )}
          </div>
        </BlueprintFrame>
      </div>
    </section>
  );
}
