import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface LeadFormProps {
  type: "property" | "car";
}

const LeadForm = ({ type }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    budget: "",
    callTime: "",
    contactMethod: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    toast.success("Thank you! Our team will contact you shortly.");
    setFormData({ name: "", phone: "", whatsapp: "", budget: "", callTime: "", contactMethod: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-primary/10 bg-card p-6">
      <h3 className="font-display text-xl font-bold text-foreground">
        {type === "property" ? "Request Property Details" : "Request an Offer"}
      </h3>
      <p className="text-sm text-muted-foreground">Fill in your details and our team will reach out.</p>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border-primary/20 bg-secondary"
          maxLength={100}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          placeholder="+20 1XX XXX XXXX"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border-primary/20 bg-secondary"
          maxLength={20}
        />
      </div>

      {type === "property" ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp Number (optional)</Label>
            <Input
              id="whatsapp"
              placeholder="WhatsApp number"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="border-primary/20 bg-secondary"
              maxLength={20}
            />
          </div>
          <div className="space-y-2">
            <Label>Preferred Budget (optional)</Label>
            <Select value={formData.budget} onValueChange={(v) => setFormData({ ...formData, budget: v })}>
              <SelectTrigger className="border-primary/20 bg-secondary">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-2m">Under EGP 2M</SelectItem>
                <SelectItem value="2m-5m">EGP 2M - 5M</SelectItem>
                <SelectItem value="5m-10m">EGP 5M - 10M</SelectItem>
                <SelectItem value="10m+">Over EGP 10M</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Preferred Call Time (optional)</Label>
            <Select value={formData.callTime} onValueChange={(v) => setFormData({ ...formData, callTime: v })}>
              <SelectTrigger className="border-primary/20 bg-secondary">
                <SelectValue placeholder="Best time to call" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                <SelectItem value="evening">Evening (5PM - 9PM)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      ) : (
        <div className="space-y-2">
          <Label>Preferred Contact Method</Label>
          <Select value={formData.contactMethod} onValueChange={(v) => setFormData({ ...formData, contactMethod: v })}>
            <SelectTrigger className="border-primary/20 bg-secondary">
              <SelectValue placeholder="How should we reach you?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="phone">Phone Call</SelectItem>
              <SelectItem value="whatsapp">WhatsApp</SelectItem>
              <SelectItem value="either">Either is fine</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <Button type="submit" className="w-full bg-primary" size="lg">
        {type === "property" ? "Request Details" : "Request Offer"}
      </Button>
    </form>
  );
};

export default LeadForm;
