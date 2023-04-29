const mongoose = require("mongoose");

const groupsEnum = {
  values: [
    "Family",
    "Friends",
    "Coworkers",
    "Business contacts",
    "Acquaintances",
  ],
  message: "{VALUE} is not a valid group",
};

const tagsEnum = {
  values: [
    "Important",
    "Urgent",
    "Follow-up",
    "Prospective customer",
    "Referral",
    "Sales lead",
    "Event attendee",
    "Location-based",
    "Interest-based",
  ],
  message: "{VALUE} is not a valid tag",
};

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: [String],
      unique: true,
      validate: {
        validator: (emails) => {
          if (!emails || !Array.isArray(emails) || emails.length === 0) {
            return true;
          }
          for (let i = 0; i < emails.length; i++) {
            if (!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(emails[i])) {
              return false;
            }
          }
          return true;
        },
        message: "Email address is invalid",
      },
    },
    phone: {
      type: [String],
      required: [true, "At least one phone number is required"],
      validate: {
        validator: (phones) => {
          if (!phones || !Array.isArray(phones) || phones.length === 0) {
            return false;
          }
          for (let i = 0; i < phones.length; i++) {
            if (!/^\+?[0-9]{10,}$/.test(phones[i])) {
              return false;
            }
          }
          return true;
        },
        message: "Phone number is invalid",
      },
    },
    company: {
      type: String,
      required: [false, "Company is optional"],
    },
    jobTitle: {
      type: String,
      required: [false, "Job title is optional"],
    },
    address: {
      type: String,
      required: [false, "Address is optional"],
    },
    groups: {
      type: [String],
      required: [false, "Groups are optional"],
      default: [],
      enum: groupsEnum,
    },
    tags: {
      type: [String],
      required: [false, "Tags are optional"],
      default: [],
      enum: tagsEnum,
    },
    notes: {
      type: [String],
      required: [false, "Notes are optional"],
      default: [],
    },
    sharedWith: {
      type: [String],
      required: [false, "Shared with is optional"],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
