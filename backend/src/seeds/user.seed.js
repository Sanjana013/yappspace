import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "lily.evans@example.com",
    fullName: "Lily Evans",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "grace.hall@example.com",
    fullName: "Grace Hall",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "ella.lee@example.com",
    fullName: "Ella Lee",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "chloe.walker@example.com",
    fullName: "Chloe Walker",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "harper.young@example.com",
    fullName: "Harper Young",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    email: "zoe.king@example.com",
    fullName: "Zoe King",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    email: "hannah.scott@example.com",
    fullName: "Hannah Scott",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    email: "natalie.green@example.com",
    fullName: "Natalie Green",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
  },

  // Male Users
  {
    email: "ethan.white@example.com",
    fullName: "Ethan White",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "noah.harris@example.com",
    fullName: "Noah Harris",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "liam.lewis@example.com",
    fullName: "Liam Lewis",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "mason.robinson@example.com",
    fullName: "Mason Robinson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    email: "logan.ward@example.com",
    fullName: "Logan Ward",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    email: "jack.allen@example.com",
    fullName: "Jack Allen",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    email: "sebastian.baker@example.com",
    fullName: "Sebastian Baker",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    email: "owen.nelson@example.com",
    fullName: "Owen Nelson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
