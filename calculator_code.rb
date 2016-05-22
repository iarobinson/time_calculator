puts nil
puts "This is a tool for adjusting podcast show notes time stamps."
puts nil
puts "Enter the time to add to each show note? (Format [0:00:00])"
adjust_time = gets.chomp

puts nil
puts "Thank you we will add #{adjust_time} to each note."
puts nil
puts "Now please paste in your show notes in html format."
show_notes = gets.chomp

puts "Adjust time = #{adjust_time}"
puts "Here are your shownotes:"
puts "#{show_notes}"

def identify_time_stamp(string)
  characters = string.split("")
  i = 0
  while i < characters.length
    if characters[i] == 91
      return "A time stamp was found"
    end
    i += 1
  end
end

puts identify_time_stamp(show_notes)
