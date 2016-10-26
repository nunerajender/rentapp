# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161026051338) do

  create_table "conversations", force: :cascade do |t|
    t.integer  "sender_id",    limit: 4
    t.integer  "recipient_id", limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "messages", force: :cascade do |t|
    t.text     "content",         limit: 65535
    t.integer  "conversation_id", limit: 4
    t.integer  "user_id",         limit: 4
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  add_index "messages", ["conversation_id"], name: "index_messages_on_conversation_id", using: :btree
  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.integer  "room_id",            limit: 4
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "image_file_name",    limit: 255
    t.string   "image_content_type", limit: 255
    t.integer  "image_file_size",    limit: 4
    t.datetime "image_updated_at"
  end

  add_index "photos", ["room_id"], name: "index_photos_on_room_id", using: :btree

  create_table "reservations", force: :cascade do |t|
    t.integer  "user_id",    limit: 4
    t.integer  "room_id",    limit: 4
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer  "price",      limit: 4
    t.integer  "total",      limit: 4
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.boolean  "status",     limit: 1
  end

  add_index "reservations", ["room_id"], name: "index_reservations_on_room_id", using: :btree
  add_index "reservations", ["user_id"], name: "index_reservations_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.text     "comment",    limit: 65535
    t.integer  "star",       limit: 4,     default: 1
    t.integer  "room_id",    limit: 4
    t.integer  "user_id",    limit: 4
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  add_index "reviews", ["room_id"], name: "index_reviews_on_room_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "rooms", force: :cascade do |t|
    t.string   "home_type",           limit: 255
    t.string   "room_type",           limit: 255
    t.integer  "accommodate",         limit: 4
    t.integer  "bed_room",            limit: 4
    t.integer  "bath_room",           limit: 4
    t.string   "listing_name",        limit: 255
    t.text     "summary",             limit: 65535
    t.string   "address",             limit: 255
    t.boolean  "is_tv",               limit: 1
    t.boolean  "is_kitchen",          limit: 1
    t.boolean  "is_air",              limit: 1
    t.boolean  "is_heating",          limit: 1
    t.boolean  "is_internet",         limit: 1
    t.integer  "price",               limit: 4
    t.boolean  "active",              limit: 1
    t.integer  "user_id",             limit: 4
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.float    "latitude",            limit: 24
    t.float    "longitude",           limit: 24
    t.boolean  "is_essentials",       limit: 1
    t.boolean  "is_shampoo",          limit: 1
    t.boolean  "is_washer",           limit: 1
    t.boolean  "is_dryer",            limit: 1
    t.boolean  "is_fr_parking",       limit: 1
    t.boolean  "is_w_internet",       limit: 1
    t.boolean  "is_c_tv",             limit: 1
    t.boolean  "is_breakfast",        limit: 1
    t.boolean  "is_pets_allowed",     limit: 1
    t.boolean  "is_family",           limit: 1
    t.boolean  "is_s_events",         limit: 1
    t.boolean  "is_smoking",          limit: 1
    t.boolean  "is_wheelchair",       limit: 1
    t.boolean  "is_elevator",         limit: 1
    t.boolean  "is_indoor_fireplace", limit: 1
    t.boolean  "b_w_intercom",        limit: 1
    t.boolean  "is_doorman",          limit: 1
    t.boolean  "is_pool",             limit: 1
    t.boolean  "is_hottub",           limit: 1
    t.boolean  "is_gym",              limit: 1
    t.boolean  "is_24h_checkin",      limit: 1
    t.boolean  "is_hangers",          limit: 1
    t.boolean  "is_iron",             limit: 1
    t.boolean  "is_hair_dryer",       limit: 1
    t.boolean  "is_laptop_workspace", limit: 1
  end

  add_index "rooms", ["user_id"], name: "index_rooms_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255,   default: "", null: false
    t.string   "encrypted_password",     limit: 255,   default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,     default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
    t.string   "fullname",               limit: 255
    t.string   "confirmation_token",     limit: 255
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "provider",               limit: 255
    t.string   "uid",                    limit: 255
    t.string   "image",                  limit: 255
    t.string   "phone_number",           limit: 255
    t.text     "description",            limit: 65535
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "messages", "conversations"
  add_foreign_key "messages", "users"
  add_foreign_key "photos", "rooms"
  add_foreign_key "reservations", "rooms"
  add_foreign_key "reservations", "users"
  add_foreign_key "reviews", "rooms"
  add_foreign_key "reviews", "users"
  add_foreign_key "rooms", "users"
end
