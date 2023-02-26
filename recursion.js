Function palindrome(word:string):Boolean
Var
wordindex_right, wordindex-left:integer
palindrome:boolean
BEGIN

BEGIN
Write("write word");
Read("word");
palindrome:=true

wordleft_index := 1
wordright_index := length(word)
WHILE (left_index < right_index and palindrome) DO
    IF word[wordleft_index] = word[wordright_index] THEN
wordleft_index := wordleft_index + 1
wordright_index := wordright_index - 1
    ELSE
palindrome := false
    END_IF
END_WHILE

IF palindrome THEN
write("The word is a palindrome")
ELSE
write("The word is not a palindrome")
END_IF
END.
