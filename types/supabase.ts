export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      car_details: {
        Row: {
          id: string
          km: number | null
          listing_id: string
          model: number
          status: string
          transmission: Database["public"]["Enums"]["transmission_enum"] | null
        }
        Insert: {
          id?: string
          km?: number | null
          listing_id: string
          model: number
          status?: string
          transmission?: Database["public"]["Enums"]["transmission_enum"] | null
        }
        Update: {
          id?: string
          km?: number | null
          listing_id?: string
          model?: number
          status?: string
          transmission?: Database["public"]["Enums"]["transmission_enum"] | null
        }
        Relationships: [
          {
            foreignKeyName: "car_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: true
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      car_specification: {
        Row: {
          car_id: string
          drive_train: Database["public"]["Enums"]["drive_train_enum"] | null
          engine: string | null
          id: string
          power: number | null
          top_speed: number | null
          torque: number | null
          zero_to_100: number | null
        }
        Insert: {
          car_id: string
          drive_train?: Database["public"]["Enums"]["drive_train_enum"] | null
          engine?: string | null
          id?: string
          power?: number | null
          top_speed?: number | null
          torque?: number | null
          zero_to_100?: number | null
        }
        Update: {
          car_id?: string
          drive_train?: Database["public"]["Enums"]["drive_train_enum"] | null
          engine?: string | null
          id?: string
          power?: number | null
          top_speed?: number | null
          torque?: number | null
          zero_to_100?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "car_specification_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: true
            referencedRelation: "car_details"
            referencedColumns: ["id"]
          },
        ]
      }
      company_settings: {
        Row: {
          address: string | null
          company_name: string
          email: string | null
          facebook: string | null
          id: string
          instagram: string | null
          phone: string | null
          tiktok: string | null
          twitter: string | null
          whatsapp: string | null
          youtube: string | null
        }
        Insert: {
          address?: string | null
          company_name?: string
          email?: string | null
          facebook?: string | null
          id?: string
          instagram?: string | null
          phone?: string | null
          tiktok?: string | null
          twitter?: string | null
          whatsapp?: string | null
          youtube?: string | null
        }
        Update: {
          address?: string | null
          company_name?: string
          email?: string | null
          facebook?: string | null
          id?: string
          instagram?: string | null
          phone?: string | null
          tiktok?: string | null
          twitter?: string | null
          whatsapp?: string | null
          youtube?: string | null
        }
        Relationships: []
      }
      cta_section: {
        Row: {
          cars_button: string
          estate_button: string | null
          id: string
          subtitle: string
          title: string
        }
        Insert: {
          cars_button?: string
          estate_button?: string | null
          id?: string
          subtitle?: string
          title?: string
        }
        Update: {
          cars_button?: string
          estate_button?: string | null
          id?: string
          subtitle?: string
          title?: string
        }
        Relationships: []
      }
      faq_section: {
        Row: {
          answer: string
          id: string
          question: string
        }
        Insert: {
          answer: string
          id?: string
          question: string
        }
        Update: {
          answer?: string
          id?: string
          question?: string
        }
        Relationships: []
      }
      listing: {
        Row: {
          created_at: string | null
          id: string
          is_featured: boolean
          overview: string | null
          price: number
          price_details: string | null
          type: Database["public"]["Enums"]["listing_type_enum"]
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_featured?: boolean
          overview?: string | null
          price: number
          price_details?: string | null
          type: Database["public"]["Enums"]["listing_type_enum"]
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_featured?: boolean
          overview?: string | null
          price?: number
          price_details?: string | null
          type?: Database["public"]["Enums"]["listing_type_enum"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_listing_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      listing_faq: {
        Row: {
          answer: string
          id: string
          listing_id: string
          question: string
        }
        Insert: {
          answer: string
          id?: string
          listing_id: string
          question: string
        }
        Update: {
          answer?: string
          id?: string
          listing_id?: string
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "listing_faq_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      listing_feature: {
        Row: {
          feature: string
          id: string
          listing_id: string
        }
        Insert: {
          feature: string
          id?: string
          listing_id: string
        }
        Update: {
          feature?: string
          id?: string
          listing_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "listing_feature_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      listing_image: {
        Row: {
          color: string | null
          id: string
          listing_id: string
          url: string
        }
        Insert: {
          color?: string | null
          id?: string
          listing_id: string
          url: string
        }
        Update: {
          color?: string | null
          id?: string
          listing_id?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "listing_image_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      listing_leads: {
        Row: {
          call_time: Database["public"]["Enums"]["call_time_enum"] | null
          contact_method:
            | Database["public"]["Enums"]["contact_method_enum"]
            | null
          created_at: string | null
          customer_name: string
          customer_phone: string
          id: string
          listing_id: string
          status: Database["public"]["Enums"]["lead_status_enum"]
          user_id: string | null
        }
        Insert: {
          call_time?: Database["public"]["Enums"]["call_time_enum"] | null
          contact_method?:
            | Database["public"]["Enums"]["contact_method_enum"]
            | null
          created_at?: string | null
          customer_name?: string
          customer_phone: string
          id?: string
          listing_id: string
          status?: Database["public"]["Enums"]["lead_status_enum"]
          user_id?: string | null
        }
        Update: {
          call_time?: Database["public"]["Enums"]["call_time_enum"] | null
          contact_method?:
            | Database["public"]["Enums"]["contact_method_enum"]
            | null
          created_at?: string | null
          customer_name?: string
          customer_phone?: string
          id?: string
          listing_id?: string
          status?: Database["public"]["Enums"]["lead_status_enum"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_leads_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_leads_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      listing_payment_plan: {
        Row: {
          down_payment: number
          id: string
          listing_id: string
          monthly_payment: number
          period_in_months: number
        }
        Insert: {
          down_payment: number
          id?: string
          listing_id: string
          monthly_payment: number
          period_in_months: number
        }
        Update: {
          down_payment?: number
          id?: string
          listing_id?: string
          monthly_payment?: number
          period_in_months?: number
        }
        Relationships: [
          {
            foreignKeyName: "listing_payment_plan_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: true
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_section: {
        Row: {
          id: string
          images: string[]
          subtitle: string
          title: string
        }
        Insert: {
          id?: string
          images: string[]
          subtitle?: string
          title?: string
        }
        Update: {
          id?: string
          images?: string[]
          subtitle?: string
          title?: string
        }
        Relationships: []
      }
      property_details: {
        Row: {
          area: number
          bathrooms: number | null
          bedrooms: number | null
          id: string
          listing_id: string
          location: string
          name: string
          type: Database["public"]["Enums"]["property_type_enum"]
        }
        Insert: {
          area: number
          bathrooms?: number | null
          bedrooms?: number | null
          id?: string
          listing_id: string
          location: string
          name: string
          type?: Database["public"]["Enums"]["property_type_enum"]
        }
        Update: {
          area?: number
          bathrooms?: number | null
          bedrooms?: number | null
          id?: string
          listing_id?: string
          location?: string
          name?: string
          type?: Database["public"]["Enums"]["property_type_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "property_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: true
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      testimonials: {
        Row: {
          comment: string
          id: string
          name: string
          role: string | null
        }
        Insert: {
          comment: string
          id?: string
          name: string
          role?: string | null
        }
        Update: {
          comment?: string
          id?: string
          name?: string
          role?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          image: string | null
          name: string
          password: string | null
          provider: string
          provider_account_id: string
          role: Database["public"]["Enums"]["user_role_enum"]
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          image?: string | null
          name: string
          password?: string | null
          provider: string
          provider_account_id: string
          role?: Database["public"]["Enums"]["user_role_enum"]
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          image?: string | null
          name?: string
          password?: string | null
          provider?: string
          provider_account_id?: string
          role?: Database["public"]["Enums"]["user_role_enum"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      call_time_enum: "morning" | "afternoon" | "evening"
      contact_method_enum: "phone_call" | "message"
      drive_train_enum: "fwd" | "rwd" | "awd"
      lead_status_enum: "new" | "called" | "closed"
      listing_type_enum: "car" | "property"
      property_type_enum: "apartment" | "villa" | "penthouse" | "townhouse"
      transmission_enum: "automatic" | "manual"
      user_role_enum: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      call_time_enum: ["morning", "afternoon", "evening"],
      contact_method_enum: ["phone_call", "message"],
      drive_train_enum: ["fwd", "rwd", "awd"],
      lead_status_enum: ["new", "called", "closed"],
      listing_type_enum: ["car", "property"],
      property_type_enum: ["apartment", "villa", "penthouse", "townhouse"],
      transmission_enum: ["automatic", "manual"],
      user_role_enum: ["admin", "user"],
    },
  },
} as const
