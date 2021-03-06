module PortableDevice
    attr_writer :bat_level
    # battery_level || = 0

    def battery_level(bat_level)
        puts "Battery: " + bat_level.to_s + "%"
    end

    def check_cell_signal
        puts "Checking signal strength... " 
    end
    
    def charge(bat_level)
        bat_level += 1
    end

  end

  module ComputeDevice
    def boot
        puts "Booting Linux... "
    end
  end

class Phone 
    include PortableDevice
    attr_accessor :bat_level

    def initialize(bat_level:)
        @bat_level = bat_level 
    end

    def check_battery_level
        print "Phone "
        battery_level(@bat_level)
    end

    def check_signal
        print "Phone "
        check_cell_signal()
    end

    def charge_device
        @bat_level = charge(@bat_level)
    end

end

class Laptop 
    include PortableDevice
    attr_accessor :bat_level

    def initialize(bat_level:10)
        @bat_level = bat_level 
    end

    def check_battery_level
        print "Laptop "
        battery_level(@bat_level)
    end

    def check_signal
        print "Laptop "
        check_cell_signal()
    end

    def charge_device
        @bat_level = charge(@bat_level)
    end
    
end

class Computer 
    include ComputeDevice
end


  phone = Phone.new(bat_level: 10)
  laptop = Laptop.new
  computer = Computer.new

    phone.bat_level = 12
    phone.check_signal
    phone.check_battery_level

    #charge phone + 5%
    #i = 0
    # puts "Phone Charging for 5%..."
    # while i < 5
    #     phone.charge_device
    #     i += 1
    # end

    # phone.check_battery_level

    laptop.check_battery_level
    #charge laptop + 10%
    j = 0
    puts "Laptop Charging for 10%..."
    while j < 10
        laptop.charge_device
        j += 1
    end

    laptop.check_battery_level

    laptop.check_signal
    computer.boot
  
