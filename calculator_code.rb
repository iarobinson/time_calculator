
def identify_time_stamp(string)
  characters = string.split("")
  i = 0
  while i < characters.length
    if characters[i] == "["
      return "A time stamp was found!!!!"
    end
    i += 1
  end
end

def understand_format(string)

end

def time_calc(string)

end

puts "Please enter the time to be added to each show note? (Format [0:00:00])"
adjust_time = gets.chomp
puts "To confirm: We will add #{adjust_time} to each note."
puts "Please paste in your show note with timestamp."
show_notes = gets.chomp

puts "Adjust time = #{adjust_time}"
puts "#{show_notes}"

puts identify_time_stamp(show_notes).to_s
