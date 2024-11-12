# Pair Programming exercise 

Write an function that converts time into the corresponding english words - eg. '8:30' -> 'half past eight'

## Examples

- '0:00' > 'midnight'
- '12:00' > 'midday'
- '2:00' > 'two o'clock'
- '2:03' > 'three past two'
- '2:11' > 'eleven past two'
- '2:15' > 'quarter past two' 
- '2:30' > 'half past two'
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three' 
- '2:55' > 'five to three'

## Code cleanup

- Expand map to include all numbers between 0 and 60
- Mapped values should then contain 'past' or 'to' as well
- Map keys should contain the leading '0'. This would avoid us having to do the string replace on line 78.
  - To get the hours to map even with the leading 0, we could either add the leading 0 to the time string at the start of execution
