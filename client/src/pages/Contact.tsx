import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    },
  });

  const onSubmit = async (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-contact">Contactează-ne</h2>
            <p className="text-lg text-gray-600" data-testid="text-contact-description">
              Avem răbdare să răspundem la orice întrebare. Completează formularul sau
              contactează-ne direct.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6" data-testid="heading-form">Trimite-ne un mesaj</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg" data-testid="alert-success">
                  <p className="text-green-800 font-semibold" data-testid="text-success-title">
                    Mulțumim! Mesajul tău a fost trimis cu succes.
                  </p>
                  <p className="text-sm text-green-600 mt-1" data-testid="text-success-message">
                    Vom reveni cu un răspuns în cel mai scurt timp.
                  </p>
                </div>
              )}

              {contactMutation.isError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" data-testid="alert-error">
                  <p className="text-red-800 font-semibold" data-testid="text-error-title">
                    A apărut o eroare la trimiterea mesajului.
                  </p>
                  <p className="text-sm text-red-600 mt-1" data-testid="text-error-message">
                    Vă rugăm să încercați din nou sau să ne contactați direct.
                  </p>
                </div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nume complet *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ion Popescu"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="ion@exemplu.ro"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon (opțional)</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+40 700 000 000"
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mesaj *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Spune-ne cum te putem ajuta..."
                            className="min-h-32"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-cardzify-coral hover:bg-cardzify-coral/90"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? "Se trimite..." : "Trimite mesajul"}
                  </Button>
                </form>
              </Form>
            </Card>

            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6" data-testid="heading-contact-info">Informații de contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4" data-testid="contact-email">
                    <div className="bg-cardzify-coral/10 p-3 rounded-lg" data-testid="icon-email">
                      <Mail className="w-6 h-6 text-cardzify-coral" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" data-testid="label-email">Email</h4>
                      <p className="text-gray-600" data-testid="text-email-1">info@cardzify.ro</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-phone">
                    <div className="bg-cardzify-coral/10 p-3 rounded-lg" data-testid="icon-phone">
                      <Phone className="w-6 h-6 text-cardzify-coral" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" data-testid="label-phone">Telefon</h4>
                      <p className="text-gray-600" data-testid="text-phone">+40750452182</p>
                      <p className="text-sm text-gray-500 mt-1" data-testid="text-phone-hours">
                        Luni - Vineri: 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-cardzify-light border-0">
                <h3 className="text-xl font-bold mb-4" data-testid="heading-schedule">Program de lucru</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between" data-testid="schedule-weekday">
                    <span data-testid="label-weekday">Luni - Vineri:</span>
                    <span className="font-semibold" data-testid="hours-weekday">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between" data-testid="schedule-saturday">
                    <span data-testid="label-saturday">Sâmbătă:</span>
                    <span className="font-semibold" data-testid="hours-saturday">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between" data-testid="schedule-sunday">
                    <span data-testid="label-sunday">Duminică:</span>
                    <span className="font-semibold" data-testid="hours-sunday">Închis</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
