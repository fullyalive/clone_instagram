from rest_framework.views import APIView
from rest_framework.response import response
from . import models, serializers

class ListAllImages(APIView):

    def get(self, request, format=None):

        all_images = models.Image.objects.all()

        serializer = serializers.ImageSerializer(all_images)

        return Response(data=serializer.data)