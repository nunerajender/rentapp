class AddFieldsToRooms < ActiveRecord::Migration
  def change
    add_column :rooms, :is_essentials, :boolean
    add_column :rooms, :is_shampoo, :boolean
    add_column :rooms, :is_washer, :boolean
    add_column :rooms, :is_dryer, :boolean
    add_column :rooms, :is_fr_parking, :boolean
    add_column :rooms, :is_w_internet, :boolean
    add_column :rooms, :is_c_tv, :boolean
    add_column :rooms, :is_breakfast, :boolean
    add_column :rooms, :is_pets_allowed, :boolean
    add_column :rooms, :is_family, :boolean
    add_column :rooms, :is_s_events, :boolean
    add_column :rooms, :is_smoking, :boolean
    add_column :rooms, :is_wheelchair, :boolean
    add_column :rooms, :is_elevator, :boolean
    add_column :rooms, :is_indoor_fireplace, :boolean
    add_column :rooms, :b_w_intercom, :boolean
    add_column :rooms, :is_doorman, :boolean
    add_column :rooms, :is_pool, :boolean
    add_column :rooms, :is_hottub, :boolean
    add_column :rooms, :is_gym, :boolean
    add_column :rooms, :is_24h_checkin, :boolean
    add_column :rooms, :is_hangers, :boolean
    add_column :rooms, :is_iron, :boolean
    add_column :rooms, :is_hair_dryer, :boolean
    add_column :rooms, :is_laptop_workspace, :boolean
  end
end
